import getEvaluator from '../../evaluation/EvaluatorFactory';

jest.mock('../../service/trainPlannerService');
jest.mock('../../service/coordinatorService');

it('should return overall status as PASS if all the individual tests passed', async () => {
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
      score: '30',
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

it('should return overall status as PARTIAL SUCCESS if some of the tests failed', async () => {
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
        greenLine: 2, /* changing expectation so that this test will fail */
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
      message: 'PARTIAL SUCCESS',
      runId: '123',
      score: '10',
      testCases: [{
        name: 'test case 1',
        status: 'PASS',
        score: 10,
      },
      {
        name: 'test case 2',
        status: 'FAIL',
        score: 0,
      },
      ],
    },
  );
});

it('should return overall status as FAILURE if all the tests failed', async () => {
  const mockTestCases = [
    {
      name: 'test case 1',
      input: { id: 1 },
      output: { numberOfTrains: {
        greenLine: 4, /* changing expectation so that this test will fail */
        redLine: 2,
      } },
      score: 10,
    },
    {
      name: 'test case 2',
      input: { id: 2 },
      output: { numberOfTrains: {
        greenLine: 2, /* changing expectation so that this test will fail */
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
      message: 'FAIL',
      runId: '123',
      score: '0',
      testCases: [{
        name: 'test case 1',
        status: 'FAIL',
        score: 0,
      },
      {
        name: 'test case 2',
        status: 'FAIL',
        score: 0,
      },
      ],
    },
  );
});

it('should continue to evaluate other tests if one tests throws error', async () => {
  const mockTestCases = [
    {
      name: 'test case 1',
      input: { id: 3 }, /* this input will throw error as per the mock data */
      output: { numberOfTrains: {
        greenLine: 4,
        redLine: 2,
      } },
      score: 10,
    },
    {
      name: 'test case 2',
      input: { id: 1 },
      output: { numberOfTrains: {
        greenLine: 5,
        redLine: 2,
      } },
      score: 10,
    },
    {
      name: 'test case 3',
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
      message: 'PARTIAL SUCCESS',
      runId: '123',
      score: '30',
      testCases: [{
        name: 'test case 1',
        status: 'FAIL',
        score: 0,
      },
      {
        name: 'test case 2',
        status: 'PASS',
        score: 10,
      },
      {
        name: 'test case 3',
        status: 'PASS',
        score: 20,
      },
      ],
    },
  );
});

it('should send the results back to coordinator once evaluate is complete', async () => {
  const mockTestCases = [
    {
      name: 'test case 1',
      input: { id: 1 },
      output: { busiestRoute: { route: 1, numOfPassengers: 100 } },
      score: 10,
    },
    {
      name: 'test case 2',
      input: { id: 2 },
      output: { busiestRoute: { route: 1, numOfPassengers: 100 } },
      score: 20,
    },
  ];

  const mockStore = { getTestCases: () => mockTestCases };
  const evaluator = getEvaluator('TrainPlanner',
    { runId: '123', teamUrl: 'https://cis2017-team-node.herokuapp.com/trainPlanner' }, mockStore);

  const results = await evaluator.evaluate();
  const postResults = await evaluator.postEvaluationResults(results);
  expect(postResults.statusCode).toEqual(200);
  expect(postResults.body.message).toEqual('test results are accepted');
});
