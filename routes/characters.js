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
      console.log('meow');
    }
  });

});

module.exports = router;
