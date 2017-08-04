import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/instructions', (req, res) => {
  res.render('instructions');
});

router.post('/evaluate', (req, res) => {
  res.json({ message: 'request received' });
});

module.exports = router;
