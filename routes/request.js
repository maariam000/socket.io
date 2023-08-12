const express = require('express')
const path = require('path')


const router =express.Router()

router.get('/', (req, res) => {
  // res.json('Request page')
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

module.exports = router;