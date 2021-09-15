const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('pages/myfavourites')
})

  module.exports = router