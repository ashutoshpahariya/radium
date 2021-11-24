const mongoose = require('mongoose')


const accountSchema = new mongoose.Schema({
    name: { type: String, require: true, unique: true },
    mobile: { type: Number, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isdeleted: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('myAccount', accountSchema)
