// The model to get the rainfall status

const mongoose = require('mongoose');

const sensor_values_schema = mongoose.Schema({
    Date : {
        type : String,
        required : true
    },
    Time : {
        type : String,
        required : true
    },
    MQ135_value : {
        type : Number,
        required : true
    },
    lm35_temperature : {
        type : Number,
        required : true
    },
    dht11_temperature : {
        type : Number,
        required : true
    },
    dht11_humidity : {
        type : Number,
        required : true
    },
    sound_value : {
        type : Number,
        required : true
    },
    rain_value : {
        type : Number,
        required : true
    }

});

const sensor_values_model = mongoose.model('sensorValues', sensor_values_schema);


module.exports = sensor_values_model;