'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _RequestValidator = require('./RequestValidator');

var _RequestValidator2 = _interopRequireDefault(_RequestValidator);

var _EvaluatorFactory = require('../evaluation/EvaluatorFactory');

var _EvaluatorFactory2 = _interopRequireDefault(_EvaluatorFactory);

var _TestStore = require('../store/TestStore');

var _TestStore2 = _interopRequireDefault(_TestStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/instructions', function (req, res) {
  res.render('instructions');
});

router.post('/evaluate', function (req, res) {
  var errors = (0, _RequestValidator2.default)(req);
  if (errors.length === 0) {
    var evaluator = (0, _EvaluatorFactory2.default)('TrainPlanner', req.body, new _TestStore2.default());
    evaluator.evaluate().then(function (results) {
      evaluator.postEvaluationResults(results);
      // eslint-disable-next-line no-console
      console.log(results);
    });
    res.json('request received');
  } else {
    res.statusCode = '400';
    res.json({ errors: errors });
  }
});

module.exports = router;