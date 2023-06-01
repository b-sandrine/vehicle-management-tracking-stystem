const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    names: String,
    email: String,
    phone: Number,
    nationalId: Number
})

const Owner = mongoose.model('Owners', ownerSchema)

module.exports = Owner;