var express = require('express')
var router = express.Router()

const login = require('../db/login')
const events = require('../db/events')

router.post('/login', (req, res) => {
  console.log(req.body.email, req.body.password)
  login.loginUser(req.body.email, req.body.password)
    .then (function (user) {
    res.send(user)
  })
})

router.get('/events', (req, res) => {
  events.listEvents()
    .then(function (events) {
      res.send(events)
    })
})

module.exports = router
