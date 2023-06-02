const Owners = require('../models/owner.model')

exports.createOwners = async(req,res) => {
    try {
        const results = await Owners.create(req.body)
        if(results) {
            res.status(201).send(results)
        }
    }
    catch(err) {
        throw new Error('Failed to create a new admin Owners')
    }
}

exports.getAllOwners = async(req,res) => {
    try {
        const results = await Owners.find();
        if(results) {
            res.status(200).send(results)
        }
    }
    catch(err) {
        throw new Error('Failed to retrieve Ownerss')
    }
}