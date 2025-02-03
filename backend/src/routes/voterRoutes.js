const { Router } = require("express")
const {authentication} = require("../middlewares/authentication.js")
const multer = require('../middlewares/multer.js')
const { postVoterImage } = require("../controllers/voterController.js")

const router = Router()


router.route('/postvoterimage').post(authentication, multer.uploadVoter, postVoterImage)

module.exports = router