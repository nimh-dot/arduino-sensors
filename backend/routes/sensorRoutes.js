const express = require('express');
const { postSensorData, getSensorData } = require('../controllers/sensorController');

const router = express.Router();

router.post('/', postSensorData);
router.get('/', getSensorData);

module.exports = router;