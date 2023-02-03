const express = require("express")
const router = express.Router()
const userController = require ("../controller/userController")

router.get('/:nombre/:apellido', userController.users)


module.exports = router