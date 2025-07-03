const express = require('express')
const router = express.Router()
const {CriarUser} = require('../controllers/userConroller')

router.post("/user",CriarUser);

module.exports = router