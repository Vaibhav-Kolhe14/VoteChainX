const mongoose = require('mongoose')

const voterSchema = new mongoose.Schema({
        accountAddress: {
            type: String,
            required: true
        },
        imageName: {
            type: String,
            required: true
        }
    },
    {
       timestamps: true
    }
)

const Voter = mongoose.model('Voter', voterSchema)

module.exports = Voter