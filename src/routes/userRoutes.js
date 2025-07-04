const express = require('express')
const router = express.Router()
const {CriarUser,ImgUser} = require('../controllers/userController')
const upload = require("../middlewares/uploadMiddleware")

router.post("/user",CriarUser)
router.put('/user/img',upload.single('img'),ImgUser)

module.exports = router