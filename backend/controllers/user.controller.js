const User = require('../models/user.model')

export default async function createUser(req,res) {
    try {
        const results = await User.create(req.body)
        if(results) {
            res.status(201).send(results)
        }
    }
    catch(err) {
        throw new Error('Failed to create a new admin user')
    }
}

export default async function getAllUsers(req,res) {
    try {
        const results = await User.find();
        if(results) {
            res.status(200).send(results)
        }
    }
    catch(err) {
        throw new Error('Failed to retrieve users')
    }
}