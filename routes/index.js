var express = require('express');
var router = express.Router();
let pdfParser = require('pdf2json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pdf', (req, res, next) => {

});

module.exports = router;
