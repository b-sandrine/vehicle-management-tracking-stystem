const Vehicles = require('../models/vehicle.model')

export default async function createVehicles(req,res) {
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

export default async function getAllVehicless(req,res) {
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