const express = require("express")
const router = express.Router()
const maths = require ("../controller/mathController")

// Ruta dividir --> devuelve resultado de division validando parámetros de entrada
// se llama así: http://localhost:3000/maths/dividir/63/3
router.get('/dividir/:dividendo/:divisor', maths.dividir)

// Ruta sumar --> devuelve resultado de suma si los nros son mayores a cero
// se llama así: http://localhost:3000/maths/sumar/63/3
router.get('/sumar/:valor1/:valor2', maths.sumar)

// Ruta numeropar --> recibe como parámetro de query numero=X siendo X un valor numérico
// se llama así http://localhost:3000/maths/numeropar/?numero=03
router.get('/numeropar', maths.numeroPar)


module.exports = router