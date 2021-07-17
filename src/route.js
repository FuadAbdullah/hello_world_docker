const express = require('express')
const router = express.Router()
const {
    helloWorld
} = require('./controller')

router.get('/hello', helloWorld)

module.exports = router