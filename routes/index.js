var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/random', function(req, res, next) {
  var random = Math.floor(Math.random() * 6) + 1
  res.status(200).send({
    number: random
  })
});

module.exports = router;
