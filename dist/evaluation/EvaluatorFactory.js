'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEvaluator;

var _TrainPlannerEvaluator = require('./TrainPlannerEvaluator');

var _TrainPlannerEvaluator2 = _interopRequireDefault(_TrainPlannerEvaluator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var evaluators = [];
evaluators.push({ Problem: 'TrainPlanner', Evaluator: _TrainPlannerEvaluator2.default });
//  add evaluators for other problems here.

function getEvaluator(problemName, reqData, testStore) {
  for (var i = 0; i < evaluators.length; i += 1) {
    if (evaluators[i].Problem === problemName) {
      return new evaluators[i].Evaluator(reqData.runId, reqData.teamUrl, reqData.callbackUrl, testStore);
    }
  }
  throw new Error('No evaluator exists for this problem');
}