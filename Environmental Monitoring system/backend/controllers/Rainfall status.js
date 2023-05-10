// Import the rainfall model
const rainfall_model = require('../models/rainfall_model')

// function to get the rainfall status
const getRainfallStatus = async (req, res) => {
    try {
        const result = await rainfall_model.find();

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

const addRainfallStatus = async (req, res) => {
    try {
        const rainfall = new rainfall_model({
            rainfall : 'Heavy rain'
        })
    
        const result = await rainfall.save();
    
        res.status(201).json({
            msg : 'success',
            result
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addRainfallStatus,
    getRainfallStatus
};