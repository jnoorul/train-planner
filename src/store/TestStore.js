import fs from 'fs-extra';


export default class TestStore {
  constructor(testCaseDir = `${__dirname}/../../testdata/`) {
    this.testCaseDir = testCaseDir;
  }
  async getTestCases(problemName) {
    const dirpath = `${this.testCaseDir}${problemName}/`;
    const testCases = [];
    const filenames = await fs.readdir(dirpath);

    for (let i = 0; i < filenames.length; i += 1) {
      const content = await fs.readFile(dirpath + filenames[i]);
      testCases.push(JSON.parse(content));
    }
    return testCases;
  }
}
