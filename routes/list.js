const express = require("express")
const router = express.Router()
const listController = require ("../controller/listController")



// Ruta listadodecompras --> recibe como parámetro de query una lista de elementos y la muestra
router.get('/', listController.list)

module.exports = router