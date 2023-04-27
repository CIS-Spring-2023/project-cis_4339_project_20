const express = require('express')
const router = express.Router()

// importing data model schemas
const { users } = require('../models/models')

// GET users
router.get('/', (req, res, next) => {
    users.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data),
        console.log(data)
      }
    })
  })
  

// ATTEMPT at hashing password with for validation

  // GET users TEST with hashing
/*   app.post('/', function(req, res) {
    var new_user = new User({
      username: req.body.username
    });
  
    new_user.password = new_user.generateHash(req.body.password);
    new_user.save();
  }); */

  router.post('/', function(req, res) {
    users.findOne({username: req.body.username}, function(err, user) {
  
      if (!user.validPassword(req.body.password)) {
        console.log("user and pass bad")
        return next(error)
      } else {
        res.send("user and pass good")
      }
    });
  });

  module.exports = router