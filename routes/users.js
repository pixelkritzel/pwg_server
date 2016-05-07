var express = require('express');
var router = express.Router();

var models = require('../sequelize/models/index');


router.post('/', function(req, res, next) {
  models.User.create({
    Email: req.body.Email
  }).then(function(user) {
    res.json(user);
  });
});

module.exports = router;
