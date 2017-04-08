var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var CharacterModel = mongoose.model('Character', { ugy: Number, ero: Number });

router.post('/', function(req, res, next) {
  console.log(req.body);
  var character = new CharacterModel(req.body);
  character.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send({message: "save success"});
    }
  });
});

router.get('/', function(req, res, next) {
  CharacterModel.find({}, function (err, result) {
    if (err) {
      return console.log(err);
    }
    return res.send(result);
  });
});

router.delete('/', function(req, res, next) {
  CharacterModel.remove({}, function (err, result) {
    if (err) {
      return console.log(err);
    }
    res.send({message: "delete success"});
  });
});

module.exports = router;
