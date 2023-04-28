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
  
//Posting credentials 
  router.post('/', async function(req, res) {
  
   // Requesting the body as a response
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body)
 
    // crdentials to log in --- usernames : editor,viewer, password: Test ( case sensitive)
    const savedUser = await users.findOne({username: req.body.username});
  
    // validating credentials
    const valid = await bcrypt.compare(password, savedUser.password);
    if (valid){
      res.json({username: savedUser.username, _id: savedUser._id})
      return
    }

    res.status(400).send("incorrect password")
  });

  module.exports = router