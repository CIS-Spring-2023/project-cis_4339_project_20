const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

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

  router.post('/', async function(req, res) {
  
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body)
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    // const user = await users.create({username: username, password: hashedPassword})
    // await user.save()

    // res.send(user)
    // usernames : editor,viewer, password: Test
    const savedUser = await users.findOne({username: req.body.username});
  
    const valid = await bcrypt.compare(password, savedUser.password);
    if (valid){
      res.json({username: savedUser.username, _id: savedUser._id})
      return
    }

    res.status(400).send("incorrect password")
  });

  module.exports = router