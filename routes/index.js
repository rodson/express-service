var express = require('express');
var router = express.Router();

var todos = [
  "Learn polymer",
  "Learn matieral design",
  "Learn Angularjs"
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos', function(req, res, next) {
  res.json(todos);
});

module.exports = router;
