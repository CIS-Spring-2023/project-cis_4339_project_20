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
  
  
  module.exports = router