/* eslint-disable no-console */
import express from 'express';
import validateRequest from './RequestValidator';
import getEvaluator from '../evaluation/EvaluatorFactory';
import TestStore from '../store/TestStore';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('instructions');
});

router.get('/instructions', (req, res) => {
  res.render('instructions');
});

router.post('/evaluate', (req, res) => {
  console.log(`evaluate request received with ${JSON.stringify(req.body)}`);
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
    console.log(`evaluate request received with incorrect input ${errors}`);
    res.statusCode = '400';
    res.json({ errors });
  }
});

module.exports = router;
