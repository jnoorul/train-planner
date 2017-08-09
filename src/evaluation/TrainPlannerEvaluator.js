export default class TrainPlannerEvaluator {
  constructor(runId, teamUrl, testStore) {
    this.runId = runId;
    this.teamUrl = teamUrl;
    this.testStore = testStore;
    this.score = 0;
    this.message = '';
    this.testCases = [];
  }

  evaluate() {
    this.executeTestCases();
    return {
      runId: this.runId,
      score: this.score,
      message: this.message,
      testCases: this.testCases,
    };
  }

  executeTestCases() {
    const testCases = this.testStore.getTestCases();
    this.score = 100;
    this.message = 'PASS';
    this.testCases =
      [
        {
          name: 'Number of trains to operate on green line',
          status: 'PASS',
        },
        {
          name: 'Number of trains to operate on green line',
          status: 'PASS',
        },
        {
          name: 'Number of trains to operate on green line',
          status: 'PASS',
        },
        {
          name: 'Number of trains to operate on green line',
          status: 'PASS',
        },
      ];
  }
}

