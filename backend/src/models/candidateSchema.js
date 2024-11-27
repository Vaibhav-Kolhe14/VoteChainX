const mongoose = require('mongoose')

const CandidateSchema= new mongoose.Schema({
    accountAddress:{
        type:String,
        required:true
    },
    imageName:{
        type:String,
        required:true
    }
},
    {
        timestamps: true
    }
)
const Candidate = mongoose.model("Candidate",CandidateSchema)

module.exports= Candidate;