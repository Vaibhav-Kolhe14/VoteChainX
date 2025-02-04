const jwt = require('jsonwebtoken')
const ApiError = require('../utils/ApiError')

const authentication = async (req, res, next) => {
    const token = req.headers['x-access-token']
    // console.log("Token from authentication middelware backend :: ",token)

    if(!token) {
        throw new ApiError(400, "Unautherized User...")
    }

    const decodedInfo = jwt.verify(token, 'secretkey')
    // console.log("decodedInfo :: ", decodedInfo)
    req.accountAddress = decodedInfo.accountAddress
    next()
}

module.exports = {authentication}