const express = require('express')
const router = express.Router()
const geoController = require('../controllers/geocodingController')

router.get('/', geoController.getCountryFromCoordinates)

module.exports = router