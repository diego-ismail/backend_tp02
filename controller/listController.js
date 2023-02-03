module.exports={
    // Ruta listadodecompras --> recibe como parámetro de query una lista de elementos y la muestra
    list (req,res)  {
        res.json(req.query)
    }
        
}