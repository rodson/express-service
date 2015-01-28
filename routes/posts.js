var express = require('express');
var router = express.Router();

var posts = [
  {
    uid: 0,
    text: "Post zero text",
    username: "Peter",
    favorite: false
  },
  {
    uid: 1,
    text: "Post one text",
    username: "Ben",
    favorite: true
  },
  {
    uid: 2,
    text: "Post two text",
    username: "Tony",
    favorite: false
  },
  {
    uid: 3,
    text: "Post three text",
    username: "Danel",
    favorite: false
  },
  {
    uid: 4,
    text: "Post four text",
    username: "Anney",
    favorite: false
  }
];

router.get('/', function(req, res, next) {
  res.json(posts);
});

module.exports = router;
