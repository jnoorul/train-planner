import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/instructions', (req, res) => {
  res.render('instructions');
});


module.exports = router;
