const express = require('express');

const Router = express.Router()

const { getRainfallStatus, addRainfallStatus } = require('../controllers/Rainfall status');
const { getSensorValues, addSensorValues } = require('../controllers/Sensor Values');


Router
    .route('/rainfall_status')
    .post(addRainfallStatus)
    .get(getRainfallStatus)

Router
    .route('/sensor_values')
    .get(getSensorValues)
    .post(addSensorValues)
    


module.exports = Router;