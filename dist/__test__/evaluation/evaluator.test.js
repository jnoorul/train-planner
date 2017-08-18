'use strict';

var _EvaluatorFactory = require('../../evaluation/EvaluatorFactory');

var _EvaluatorFactory2 = _interopRequireDefault(_EvaluatorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

jest.mock('../../service/trainPlannerService');
jest.mock('../../service/coordinatorService');

it('should return overall status as PASS if all the individual tests passed', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var mockTestCases, mockStore, evaluator, results;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mockTestCases = [{
            name: 'test case 1',
            input: { id: 1 },
            output: { numberOfTrains: {
                greenLine: 5,
                redLine: 2
              } },
            score: 10
          }, {
            name: 'test case 2',
            input: { id: 2 },
            output: { numberOfTrains: {
                greenLine: 3,
                redLine: 1
              } },
            score: 20
          }];
          mockStore = { getTestCases: function getTestCases() {
              return mockTestCases;
            } };
          evaluator = (0, _EvaluatorFactory2.default)('TrainPlanner', { runId: '123', teamUrl: 'www.abc.com' }, mockStore);
          _context.next = 5;
          return evaluator.evaluate();

        case 5:
          results = _context.sent;

          expect(results).toEqual({
            message: 'PASS',
            runId: '123',
            score: '30',
            testCases: [{
              name: 'test case 1',
              status: 'PASS',
              score: 10
            }, {
              name: 'test case 2',
              status: 'PASS',
              score: 20
            }]
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

it('should return overall status as PARTIAL SUCCESS if some of the tests failed', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
  var mockTestCases, mockStore, evaluator, results;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          mockTestCases = [{
            name: 'test case 1',
            input: { id: 1 },
            output: { numberOfTrains: {
                greenLine: 5,
                redLine: 2
              } },
            score: 10
          }, {
            name: 'test case 2',
            input: { id: 2 },
            output: { numberOfTrains: {
                greenLine: 2, /* changing expectation so that this test will fail */
                redLine: 1
              } },
            score: 20
          }];
          mockStore = { getTestCases: function getTestCases() {
              return mockTestCases;
            } };
          evaluator = (0, _EvaluatorFactory2.default)('TrainPlanner', { runId: '123', teamUrl: 'www.abc.com' }, mockStore);
          _context2.next = 5;
          return evaluator.evaluate();

        case 5:
          results = _context2.sent;

          expect(results).toEqual({
            message: 'PARTIAL SUCCESS',
            runId: '123',
            score: '10',
            testCases: [{
              name: 'test case 1',
              status: 'PASS',
              score: 10
            }, {
              name: 'test case 2',
              status: 'FAIL',
              score: 0
            }]
          });

        case 7:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

it('should return overall status as FAILURE if all the tests failed', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
  var mockTestCases, mockStore, evaluator, results;
  return regeneratorRuntime.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          mockTestCases = [{
            name: 'test case 1',
            input: { id: 1 },
            output: { numberOfTrains: {
                greenLine: 4, /* changing expectation so that this test will fail */
                redLine: 2
              } },
            score: 10
          }, {
            name: 'test case 2',
            input: { id: 2 },
            output: { numberOfTrains: {
                greenLine: 2, /* changing expectation so that this test will fail */
                redLine: 1
              } },
            score: 20
          }];
          mockStore = { getTestCases: function getTestCases() {
              return mockTestCases;
            } };
          evaluator = (0, _EvaluatorFactory2.default)('TrainPlanner', { runId: '123', teamUrl: 'www.abc.com' }, mockStore);
          _context3.next = 5;
          return evaluator.evaluate();

        case 5:
          results = _context3.sent;

          expect(results).toEqual({
            message: 'FAIL',
            runId: '123',
            score: '0',
            testCases: [{
              name: 'test case 1',
              status: 'FAIL',
              score: 0
            }, {
              name: 'test case 2',
              status: 'FAIL',
              score: 0
            }]
          });

        case 7:
        case 'end':
          return _context3.stop();
      }
    }
  }, _callee3, undefined);
})));

it('should send the results back to coordinator once evaluate is complete', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
  var mockTestCases, mockStore, evaluator, results, postResults;
  return regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          mockTestCases = [{
            name: 'test case 1',
            input: { id: 1 },
            output: { busiestRoute: { route: 1, numOfPassengers: 100 } },
            score: 10
          }, {
            name: 'test case 2',
            input: { id: 2 },
            output: { busiestRoute: { route: 1, numOfPassengers: 100 } },
            score: 20
          }];
          mockStore = { getTestCases: function getTestCases() {
              return mockTestCases;
            } };
          evaluator = (0, _EvaluatorFactory2.default)('TrainPlanner', { runId: '123', teamUrl: 'https://cis2017-team-node.herokuapp.com/trainPlanner' }, mockStore);
          _context4.next = 5;
          return evaluator.evaluate();

        case 5:
          results = _context4.sent;
          _context4.next = 8;
          return evaluator.postEvaluationResults(results);

        case 8:
          postResults = _context4.sent;

          expect(postResults.statusCode).toEqual(200);
          expect(postResults.body.message).toEqual('test results are accepted');

        case 11:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, undefined);
})));