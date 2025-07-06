//require('dotenv').config({ path: '../.env' });
const express = require("express")
const userRoutes = require('./routes/userRoutes')

const cors = require('cors')
const app = express()
const path = require('path')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("/storage/img",express.static(path.join(__dirname,'../storage/img')))
app.use(express.json())


app.use('/api', userRoutes)

app.get("/", (req, res) => {
    res.json({})
})



module.exports = app;