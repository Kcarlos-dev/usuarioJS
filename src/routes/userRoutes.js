const express = require('express')
const router = express.Router()
const {CriarUser,ImgUser,GetUser} = require('../controllers/userController')
const upload = require("../middlewares/uploadMiddleware")

router.post("/user",CriarUser)
router.get("/user",GetUser)
router.put('/user/img',upload.single('img'),ImgUser)

module.exports = router