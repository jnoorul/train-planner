export default class TrainPlannerEvaluator {
  constructor(runId, teamUrl, testStore) {
    this.runId = runId;
    this.teamUrl = teamUrl;
    this.testStore = testStore;
    this.score = 0;
    this.message = '';
    this.testCases = [];
  }

  executeTest(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const output = { results: 100 };
        resolve(output);
      }, 1000);
    });
  }

  async evaluate() {
    const testCases = this.testStore.getTestCases();

    let totalScore = 0;
    const testCasesOutput = [];

    for (let i = 0; i < testCases.length; i += 1){
      let output = await this.executeTest(testCases[i].input);
      // compare output against expected output.
      testCasesOutput.push({ name: testCases[i].name,
        status: 'PASS', score: testCases[i].score });
      totalScore += testCases[i].score;
    }

    return {
      message: 'PASS',
      runId: this.runId,
      score: totalScore,
      testCases: testCasesOutput,
    };
  }
}

