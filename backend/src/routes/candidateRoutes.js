const { Router } = require("express")
const { postCandidateImage, candidateAuth } = require("../controllers/candidateController")
const { authentication } = require("../middlewares/authentication.js")
const multer = require('../middlewares/multer.js')

const router = Router()

router.route('/postcandidateimage').post(authentication, multer.uploadCandidate, postCandidateImage)

router.route("/auth").post(candidateAuth)


module.exports = router