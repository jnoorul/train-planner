import { isEqual } from 'lodash';
import execute from '../service/trainPlannerService';


export default class TrainPlannerEvaluator {
  constructor(runId, teamUrl, testStore) {
    this.runId = runId;
    this.teamUrl = teamUrl;
    this.testStore = testStore;
    this.score = 0;
    this.message = '';
    this.testCases = [];
  }

  async evaluate() {
    const testCases = await this.testStore.getTestCases('TrainPlanner');

    let totalScore = 0;
    const testCasesOutput = [];

    for (let i = 0; i < testCases.length; i += 1){
      const output = await execute(this.teamUrl, testCases[i].input);
      const result = { name: testCases[i].name };
      if (isEqual(output, testCases[i].output)) {
        result.status = 'PASS';
        result.score = testCases[i].score;
        totalScore += testCases[i].score;
      } else {
        result.status = 'FAIL';
        result.score = 0;
      }
      testCasesOutput.push(result);
    }

    return {
      message: 'PASS',
      runId: this.runId,
      score: totalScore,
      testCases: testCasesOutput,
    };
  }
}

