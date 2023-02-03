const express = require("express")
const router = express.Router()
const postController = require ("../controller/postController")



// Ruta listadodecompras --> recibe como parámetro un nombre con post
// USO http://localhost:3000/postnombre/{json con nombre}
// devuelve un json con el nombre
router.post('/', postController.nombre)

module.exports = router