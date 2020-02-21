const express = require('express')

const StartUpCtrl = require('../controllers/startup-ctrl')

const router = express.Router()

router.post('/startup', StartUpCtrl.createStartUp)
router.get('/startups', StartUpCtrl.getStartUps)

module.exports = router