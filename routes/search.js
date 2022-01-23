const express = require('express')
const router = express.Router()
const geoController = require('../controllers/geocodingController')

router.get('/', geoController.getCoordinatesFromCountry)

module.exports = router