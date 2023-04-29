const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { services } = require('../models/models')

// GET 10 most recent services for org
router.get('/', (req, res, next) => {
    services
        .find({ orgs: org }, (error, data) => {
            if (error) {
            return next(error)
            } else {
            return res.json(data),
            console.log(data)
            }
        })
        .sort({ updatedAt: -1 })
        .limit(10)
  })

// POST new service
router.post('/', (req, res, next) => {
    const newService = req.body
    newService.orgs = org
    services.create(newService, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })


  // Add PUT service
  router.put('/:id', (req, res, next) => {
    services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

module.exports = router