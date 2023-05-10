// Import the model
const sensor_values_model = require('../models/sensor_values_model')

// Function to get the sensor values for that day

const getSensorValues = async (req,res) => {
    try {
        const result = await sensor_values_model.find();

        res.status(201).json({
            'msg' : 'success',
            data : {
                result
            }
        })
    } catch (error) {
        console.log(error)
    }
}


const addSensorValues = async (req, res) => {
    try {
        
        const sensor_values = new sensor_values_model({
            Date : '31/12/1969',
            Time : '16:00:58',
            MQ135_value : 20,
            lm35_temperature : 20,
            dht11_temperature : 20.3,
            dht11_humidity : 19.8,
            sound_value : 56,
            rain_value : 56.5
        });

        const result = await sensor_values.save()

        res.status(201).json({
            msg : 'success',
            result
        })
    } catch (error) {
        
    }
}

module.exports = {
    getSensorValues,
    addSensorValues
};