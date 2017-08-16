import express from 'express';
import validateRequest from './RequestValidator';
import getEvaluator from '../evaluation/EvaluatorFactory';
import TestStore from '../store/TestStore';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/instructions', (req, res) => {
  res.render('instructions');
});

router.post('/evaluate', (req, res) => {
  const errors = validateRequest(req);
  if (errors.length === 0) {
    const evaluator = getEvaluator('TrainPlanner', req.body, new TestStore());
    evaluator.evaluate().then((results) => {
      evaluator.postEvaluationResults(results);
      // eslint-disable-next-line no-console
      console.log(results);
    });
    res.json('request received');
  } else {
    res.statusCode = '400';
    res.json({ errors });
  }
});

module.exports = router;
