const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    chasisNumber: Number,
    platenumber: Number,
    manufacturer: String,
    manufactureYear: Number,
    price: Number,
    model: String,
    ownerId: String
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;