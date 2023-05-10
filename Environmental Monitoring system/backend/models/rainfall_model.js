// The model to get the rainfall status

const mongoose = require('mongoose');

const rainfall_schema = mongoose.Schema({
    rainfall : {
        type : String,
    }
});

const rainfall_model = mongoose.model('rainfall', rainfall_schema);


module.exports = rainfall_model;