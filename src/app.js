//require('dotenv').config({ path: '../.env' });
const db = require('./config/db')
const express = require("express")
const userRoutes =  require('./routes/userRoutes')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api',userRoutes)

app.get("/", (req, res) => {
    res.json({})
})

module.exports = app;