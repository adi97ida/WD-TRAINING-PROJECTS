var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Page' });
});

module.exports = router;

mysql.createConnection({
    host: 'karolinavalentova.me',
    user: "adi97ida",
    password: "AdrianWD2018"
});