var express = require('express');
var router = express.Router();

var models = require('../sequelize/models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Service.findAll({}).then(function(todos) {
    res.json(todos);
  });
});

router.get('/:id', function(req, res) {
  models.Service.find({
    where: {
      id: req.params.id
    }
  }).then(function(todo) {
    res.json(todo);
  });
});

router.post('/', function(req, res) {
  models.Service.create({
    ServiceName: req.body.ServiceName,
    UserId: req.body.UserId
  }).then(function(todo) {
    res.json(todo);
  });
});

router.put('/:id', function(req, res) {
  models.Service.find({
    where: {
      id: req.params.id
    }
  }).then(function(todo) {
    if(todo){
      todo.updateAttributes({
        ServiceName: req.body.ServiceName
      }).then(function(todo) {
        res.send(todo);
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  models.Service.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(todo) {
    res.json(todo);
  });
});


module.exports = router;
