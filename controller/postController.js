module.exports={
    nombre (req,res)  {
    
        res.status(200).json({
            nombre: req.body.nombre,
            message: 'Succes',
            codigo: 200
        })
        console.log(req.body)
    }
    
}