const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js')
const asyncHandler = require("../utils/asyncHandler.js")
const Candidate = require("../models/candidateSchema.js")
const { default: mongoose } = require('mongoose');
const {ethers} = require("ethers")
const jwt = require("jsonwebtoken")

const postCandidateImage = asyncHandler(async (req, res) => {
    try{
        // console.log("testing post candidate...")
        const {accountAddress}=req;
        const imageName = req.file.filename;
        
        if(!accountAddress || !imageName) {
            throw new ApiError(400, "Both accountAddress and imagename is required")
        }

        const saveCandidate = await Candidate.create({
            accountAddress:accountAddress,
            imageName:imageName
        })
        // console.log(saveCandidate)
        res.status(200).json(new ApiResponse(200, saveCandidate, {message: "successful"}))

    }catch(error){
        throw new ApiError(400, error?.message || "error while saving candidate")
    }
})


const candidateAuth = asyncHandler(async (req, res) => {
    try {
        const {accountAddress} = req.query
        const {signature} = req.body
        // console.log(accountAddress, signature)

        if(!accountAddress || !signature) {
            throw new ApiError(400, "auth failed")
        }

        const message = "Welcome to voting dapp, you accept our terms and conditions"
        const recoverAddress = ethers.utils.verifyMessage(message, signature)

        if(recoverAddress.toLowerCase() !== accountAddress.toLowerCase()) {
            throw new ApiError(400, "Unautherized User")
        }
        const token = jwt.sign({accountAddress}, 'secretkey')
        // console.log(token)
        res.status(200).json(new ApiResponse(200, token, "authentication successful"));
    } catch (error) {
        throw new ApiError(400, error?.message || "Error in candidateAuth")
    }
})

module.exports = {
    postCandidateImage,
    candidateAuth
}