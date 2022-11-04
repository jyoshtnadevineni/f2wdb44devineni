var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Deer', { title: 'Search Results Deer' });
});

module.exports = router;
