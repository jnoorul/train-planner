/* eslint-disable no-console */
import { isEqual } from 'lodash';
import execute from '../service/trainPlannerService';
import postResults from '../service/coordinatorService';


export default class TrainPlannerEvaluator {
  constructor(runId, teamUrl, callbackUrl, testStore) {
    this.runId = runId;
    this.teamUrl = teamUrl;
    this.callbackUrl = callbackUrl;
    this.testStore = testStore;
    this.score = 0;
    this.message = '';
    this.testCases = [];
  }

  getOverAllStatus(testCasesOutput){
    const totalTests = testCasesOutput.length;
    let numOfFailures = 0;

    testCasesOutput.forEach((test) => {
      if (test.status === 'FAIL') {
        numOfFailures += 1;
      }
    });

    if (numOfFailures === 0) {
      return 'PASS';
    } else if (numOfFailures === totalTests) {
      return 'FAIL';
    }
    return 'PARTIAL SUCCESS';
  }

  static getRandomInt(from, to) {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generatePairOfRandomInt(from, to) {
    const first = TrainPlannerEvaluator.getRandomInt(from, to);
    let second = TrainPlannerEvaluator.getRandomInt(from, to);
    while (first === second) {
      second = TrainPlannerEvaluator.getRandomInt(from, to);
    }
    return [first, second];
  }

  async postEvaluationResults(results) {
    console.log('evaluation complete. posting results back to coordinator');
    console.log(`callback url ${this.callbackUrl}`);
    console.log(`results ${JSON.stringify(results)}`);
    return postResults(this.callbackUrl, results);
  }

  async evaluate() {
    const testCases = await this.testStore.getTestCases('TrainPlanner');

    let totalScore = 0;
    const testCasesOutput = [];
    const randomNumbers = TrainPlannerEvaluator.generatePairOfRandomInt(1, 8);

    for (let i = 0; i < testCases.length; i += 1) {
      if (randomNumbers.includes(testCases[i].groupId)) {
        const result = { name: testCases[i].name };
        try {
          console.log(`calling ${this.teamUrl}/trainPlanner for test case ${testCases[i].name}`);
          const output = await execute(this.teamUrl, testCases[i].input);
          if (isEqual(output, testCases[i].output)) {
            console.log('testcase passed');
            result.status = 'PASS';
            result.score = testCases[i].score;
            totalScore += testCases[i].score;
          } else {
            console.log('testcase failed');
            result.status = 'FAIL';
            result.score = 0;
          }
        } catch (err) {
          console.log(`exception occured while testing the solution:${err}`);
          result.status = 'FAIL';
          result.score = 0;
        }
        testCasesOutput.push(result);
      }
    }

    return {
      message: this.getOverAllStatus(testCasesOutput),
      runId: this.runId.toString(),
      score: totalScore.toString(),
      testCases: testCasesOutput,
    };
  }
}

