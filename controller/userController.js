module.exports={
    users (req,res)  {
        let nombreCompleto = req.params.nombre + " " + req.params.apellido
        res.send(`Hola ${nombreCompleto}`)
    }
    
}