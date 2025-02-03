const express = require("express")
const cors = require("cors")

//routes import
const candidateRouter = require("./routes/candidateRoutes.js")
const voterRouter = require('./routes/voterRoutes.js')

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))


//routes
app.use('/api/v1', candidateRouter)
app.use('/api/v1', voterRouter)


module.exports = { app }