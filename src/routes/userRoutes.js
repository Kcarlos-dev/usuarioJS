const express = require('express')
const router = express.Router()
const {CriarUser,ImgUser,GetUser,UpdateUser,UpdateEnderco,UpdateBio,DeleteUser} = require('../controllers/userController')
const upload = require("../middlewares/uploadMiddleware")

router.post("/user",CriarUser)
router.get("/user",GetUser)
router.put('/user/img',upload.single('img'),ImgUser)
router.put('/user/:id',UpdateUser)
router.put('/user/endereco/:id',UpdateEnderco)
router.put('/user/bio/:id',UpdateBio)
router.delete('/user/:id',DeleteUser)

module.exports = router