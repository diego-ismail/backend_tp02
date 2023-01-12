const express = require("express")
const app = express()
const port = 3000
app.get('/', (req,res) => {
    res.send("Tareas Backend")
})

// Ruta Tarea1 -- Devuelve el nombre completo
app.get('/tarea1/:nombre/:apellido', (req,res) => {
    let nombreCompleto = req.params.nombre + " " + req.params.apellido
    res.send(`Hola ${nombreCompleto}`)
})

// Ruta dividir --> devuelve resultado de division validando parámetros de entrada
app.get('/dividir/:dividendo/:divisor', (req,res) => {
    if ( isNaN(req.params.divisor) || isNaN(req.params.dividendo) || Number(req.params.divisor) === 0   ) {
        res.json({error: "no se puede dividir por cero o parametros no son numericos"})
    } else {
        let resultado= req.params.dividendo / req.params.divisor
        res.json(`Resultado: ${resultado}`)
    }
})
// Ruta sumar --> devuelve resultado de suma si los nros son mayores a cero
app.get('/sumar/:valor1/:valor2', (req,res) => {
    if ( isNaN(req.params.valor1) || isNaN(req.params.valor2) || Number(req.params.valor1) < 0 ||   Number(req.params.valor2) < 0 ) {
        res.json({error: "No se aceptan valores no numericos o menores que cero"})
    } else {
        let resultado= req.params.valor1 / req.params.valor2
        res.json(`Resultado: ${resultado}`)
    }
})
// Ruta numeropar --> recibe como parámetro de query numero=X siendo X un valor numérico
app.get('/numeropar/', (req,res) => {
    if ( isNaN(req.query.numero) || (Number(req.query.numero) % 2 ) ===1 || Number(req.query.numero) === 0) {
        res.send("No autorizado - Parámetro impar o no numérico")
    } else {
        res.send("Autorizado!!")
    }
})
// Ruta listadodecompras --> recibe como parámetro de query una lista de elementos y la muestra
app.get('/listadodecompras/', (req,res) => {
    res.json(req.query)
})



app.listen(port, () =>{
    console.log(`Aplicacion escuchando en puerto ${port}`)
})