const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js')
const asyncHandler = require("../utils/asyncHandler.js")
const Voter = require('../models/voterSchema.js')


const postVoterImage = asyncHandler(async (req, res) => {
    try {

        const {accountAddress}=req;
        const imageName = req.file.filename;

        const saveVoter = await Voter.create({
            accountAddress: accountAddress,
            imageName: imageName
        })
        res.status(200).json(new ApiResponse(200, saveVoter, {message:"successful"}))
    } catch (error) {
        throw new ApiError(400, error?.message || 'Error in posting Voter Image...')
    }
})


module.exports = {
    postVoterImage
}