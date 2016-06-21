var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(/\/todo\/?.*/, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(/\/react-router\/?.*/, function(req, res, next) {
  res.render('react-router', { title: 'Express' });
});

module.exports = router;
