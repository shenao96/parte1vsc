const Cliente = require('../models/clientes')
const { request, response} = require('express')

// crear
const createCliente = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
            const clientesDB = await Cliente.findOne({nombre})//select * from clientes
        
        if(clientesDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const email = req.body.email
            ? req.body.email.toUpperCase()
            : ''
           /*const clientesByemailDB = await Cliente.findOne({email})//select * from clientes
        
        if(clientesByemailDB){
            return res.status(400).json({msg: 'Ya existe'})
        }*/

        const data = {
            nombre, // nombre: nombre
            email // email: email
        }
        const clientes = new Cliente(data)
        console.log(clientes)
        await clientes.save()
        return res.status(201).json(clientes)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar
const getCliente = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const clientesDB = await Cliente.find({estado})//select * from clientes
            return res.json(clientesDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar
const updateClienteByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const clientes = await Cliente.findByIdAndUpdate(id, data, {new: true})
        return res.json(clientes)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { createCliente, 
    getCliente, 
    updateClienteByID}