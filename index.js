const express = require("express")
const logger = require ("morgan")
const cors = require("cors")

const app = express()
const indexRouter = require("./routes/index")
const userRouter = require("./routes/users")
const mathsRouter = require("./routes/maths")
const listRouter = require("./routes/list")
const postRouter = require("./routes/postNombre")

app.use(logger("dev"))
app.use(cors())
app.use(express.json())

app.use( "/", indexRouter )

// Ruta users -- Devuelve el nombre completo
// USO http://localhost:3000/users/diego/ibarra
// devuelve Hola diego ibarra
app.use('/users', userRouter )

// Funciones matemáticas, ver detalle en routes/maths.js
app.use('/maths', mathsRouter )

// Listado de objetos en JSON
// USO http://localhost:3000/listadodecompras/?articulo1=lechuga&articulo2=papa&articulo3=batata
// devuelve un json con el listado
app.use('/listadodecompras', listRouter )

// Listado de objetos en JSON
// USO http://localhost:3000/postnombre/{json con nombre}
// devuelve un json con el nombre
app.use('/postnombre', postRouter )




module.exports = app