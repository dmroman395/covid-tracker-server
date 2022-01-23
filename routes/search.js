const express = require('express')
const router = express.Router()
const getCoordinatesFromCountry = require('../controllers/geocodingController')

router.get('/', getCoordinatesFromCountry)

module.exports = router