import TestStore from '../../store/TestStore';

it('should retrieve list of test cases', async () => {
  const testStore = new TestStore();
  const testCases = await testStore.getTestCases('TrainPlanner');
  expect(testCases.length).toBe(16);
});
