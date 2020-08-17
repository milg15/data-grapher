const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema(
    {
        firstName:{ type: String, required : true },
        lastName:{ type: String, required : true },
        participation:{ type: Number, required : true }
    },
)

module.exports = mongoose.model('data', Data)