var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'codeFriend' });
});

/* GET users using users.js */
router.use('/users', require('./users'));

module.exports = router;
