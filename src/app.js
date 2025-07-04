//require('dotenv').config({ path: '../.env' });
const express = require("express")
const userRoutes = require('./routes/userRoutes')


const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/api', userRoutes)

app.get("/", (req, res) => {
    res.json({})
})



module.exports = app;