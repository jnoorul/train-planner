import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/instructions', (req, res) => {
  res.render('instructions');
});

function validateEvaluateRequest(req) {
  const reqData = req.body;
  const validationResults = [];
  if (reqData) {
    if (!reqData.runId) {
      validationResults.push('runId is mandatory for evaluation');
    }
    if (!reqData.teamUrl) {
      validationResults.push('teamUrl is mandatory for evaluation');
    }
    if (!reqData.callbackUrl) {
      validationResults.push('callbackUrl is mandatory for evaluation');
    }
  }
  return validationResults;
}

router.post('/evaluate', (req, res) => {
  const results = validateEvaluateRequest(req);
  if (results.length > 0) {
    res.statusCode = '400';
    res.json({ errors: results });
  }
  res.json({ message: 'request received' });
});

module.exports = router;
