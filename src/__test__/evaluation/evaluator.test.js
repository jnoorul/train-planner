import getEvaluator from '../../evaluation/EvaluatorFactory';

it('should evaluate test and return the score', async () => {
  const mockTestCases = [
    {
      name: 'test case 1',
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

