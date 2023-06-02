const Vehicles = require('../models/vehicle.model')

exports.createVehicles  = async(req,res) => {
    try {
        const results = await Vehicles.create(req.body)
        if(results) {
            res.status(201).send(results)
        }
    }
    catch(err) {
        throw new Error('Failed to create a new admin Vehicles')
    }
}

exports.getAllVehicles = async(req,res) => {
    try {
        const results = await Vehicles.find();
        if(results) {
            res.status(200).send(results)
        }
    }
    catch(err) {
        throw new Error('Failed to retrieve Vehicless')
    }
}