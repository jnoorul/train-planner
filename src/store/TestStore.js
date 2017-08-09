export default class TestStore {
  constructor(testCaseDir = `${__dirname}/../../testdata`) {
    this.testCaseDir = testCaseDir;
  }
  getTestCases(problemName) {
    return [
      {
        name: `${problemName} + 'test case 1`,
        input: {},
        output: {},
        score: 10,
      },
      {
        name: 'test case 2',
        input: {},
        output: {},
        score: 20,
      },
    ];
  }
}
