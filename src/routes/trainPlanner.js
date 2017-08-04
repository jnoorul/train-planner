import express from 'express';
import validateRequest from './RequestValidator';
import getEvaluator from '../evaluation/EvaluatorFactory';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {title: 'Express'});
});

router.get('/instructions', (req, res) => {
  res.render('instructions');
});

router.post('/evaluate', (req, res) => {
  const errors = validateRequest(req);
  if (errors.length === 0) {
    const evaluator = getEvaluator('TrainPlanner', req.body);
    res.json(evaluator.evaluate());
  } else {
    res.statusCode = '400';
    res.json({ errors });
  }
});

module.exports = router;
