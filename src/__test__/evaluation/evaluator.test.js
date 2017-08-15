import getEvaluator from '../../evaluation/EvaluatorFactory';

jest.mock('../../service/trainPlannerService');

it('should evaluate test and return the score', async () => {
  const mockTestCases = [
    {
      name: 'test case 1',
      input: { id: 1 },
      output: { numberOfTrains: {
        greenLine: 5,
        redLine: 2,
      } },
      score: 10,
    },
    {
      name: 'test case 2',
      input: { id: 2 },
      output: { numberOfTrains: {
        greenLine: 3,
        redLine: 1,
      } },
      score: 20,
    },
  ];

  const mockStore = { getTestCases: () => mockTestCases };
  const evaluator = getEvaluator('TrainPlanner',
    { runId: '123', teamUrl: 'www.abc.com' }, mockStore);

  const results = await evaluator.evaluate();
  expect(results).toEqual(
    {
      message: 'PASS',
      runId: '123',
      score: 30,
      testCases: [{
        name: 'test case 1',
        status: 'PASS',
        score: 10,
      },
      {
        name: 'test case 2',
        status: 'PASS',
        score: 20,
      },
      ],
    },
  );
});

