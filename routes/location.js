const express = require('express')
const router = express.Router()
const getCountryFromCoordinates = require('../controllers/geocodingController')

router.get('/', getCountryFromCoordinates)

module.exports = router