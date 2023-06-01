const Owners = require('../models/owner.model')

export default async function createOwners(req,res) {
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

export default async function getAllOwnerss(req,res) {
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