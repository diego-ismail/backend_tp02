const maths = {
    dividir (req,res) {
        if ( isNaN(req.params.divisor) || isNaN(req.params.dividendo) || Number(req.params.divisor) === 0   ) {
            res.json({error: "no se puede dividir por cero o parametros no son numericos"})
        } else {
            let resultado= Number(req.params.dividendo) / Number(req.params.divisor)
            res.json(`Resultado: ${resultado}`)
        }
    },
    sumar (req,res) {
        if ( isNaN(req.params.valor1) || isNaN(req.params.valor2) || Number(req.params.valor1) < 0 ||   Number(req.params.valor2) < 0 ) {
            res.json({error: "No se aceptan valores no numericos o menores que cero"})
        } else {
            let resultado= Number(req.params.valor1) + Number(req.params.valor2)
            res.json(`Resultado: ${resultado}`)
        }
    },
    numeroPar (req,res) {
        if ( isNaN(req.query.numero) || (Number(req.query.numero) % 2 ) ===1 || Number(req.query.numero) === 0) {
            res.send("No autorizado - Parámetro impar o no numérico")
        } else {
            res.send("Autorizado!!")
        }
    }

}

module.exports = maths

