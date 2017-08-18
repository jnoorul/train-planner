'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _trainPlannerService = require('../service/trainPlannerService');

var _trainPlannerService2 = _interopRequireDefault(_trainPlannerService);

var _coordinatorService = require('../service/coordinatorService');

var _coordinatorService2 = _interopRequireDefault(_coordinatorService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrainPlannerEvaluator = function () {
  function TrainPlannerEvaluator(runId, teamUrl, callbackUrl, testStore) {
    _classCallCheck(this, TrainPlannerEvaluator);

    this.runId = runId;
    this.teamUrl = teamUrl;
    this.callbackUrl = callbackUrl;
    this.testStore = testStore;
    this.score = 0;
    this.message = '';
    this.testCases = [];
  }

  _createClass(TrainPlannerEvaluator, [{
    key: 'getOverAllStatus',
    value: function getOverAllStatus(testCasesOutput) {
      var totalTests = testCasesOutput.length;
      var numOfFailures = 0;

      testCasesOutput.forEach(function (test) {
        if (test.status === 'FAIL') {
          numOfFailures += 1;
        }
      });

      if (numOfFailures === 0) {
        return 'PASS';
      } else if (numOfFailures === totalTests) {
        return 'FAIL';
      }
      return 'PARTIAL SUCCESS';
    }
  }, {
    key: 'postEvaluationResults',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(results) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('evaluation complete. posting results back to coordinator');
                console.log('callback url ' + this.callbackUrl);
                console.log('results ' + JSON.stringify(results));
                return _context.abrupt('return', (0, _coordinatorService2.default)(this.callbackUrl, results));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function postEvaluationResults(_x) {
        return _ref.apply(this, arguments);
      }

      return postEvaluationResults;
    }()
  }, {
    key: 'evaluate',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        var testCases, totalScore, testCasesOutput, i, output, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.testStore.getTestCases('TrainPlanner');

              case 2:
                testCases = _context2.sent;
                totalScore = 0;
                testCasesOutput = [];
                i = 0;

              case 6:
                if (!(i < testCases.length)) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 9;
                return (0, _trainPlannerService2.default)(this.teamUrl, testCases[i].input);

              case 9:
                output = _context2.sent;
                result = { name: testCases[i].name };

                if ((0, _lodash.isEqual)(output, testCases[i].output)) {
                  result.status = 'PASS';
                  result.score = testCases[i].score;
                  totalScore += testCases[i].score;
                } else {
                  result.status = 'FAIL';
                  result.score = 0;
                }
                testCasesOutput.push(result);

              case 13:
                i += 1;
                _context2.next = 6;
                break;

              case 16:
                return _context2.abrupt('return', {
                  message: this.getOverAllStatus(testCasesOutput),
                  runId: this.runId.toString(),
                  score: totalScore.toString(),
                  testCases: testCasesOutput
                });

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function evaluate() {
        return _ref2.apply(this, arguments);
      }

      return evaluate;
    }()
  }]);

  return TrainPlannerEvaluator;
}();

exports.default = TrainPlannerEvaluator;