const express = require('express')
const router = express.Router()
const {CriarUser} = require('../controllers/userController')

router.post("/user",CriarUser);

module.exports = router