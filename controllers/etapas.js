const Etapa = require('../models/etapas')
const { request, response} = require('express')

// crear
const createEtapa = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapasDB = await Etapa.findOne({nombre})//select * from etapas
        
        if(etapasDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapas = new Etapa(data)
        console.log(etapas)
        await etapas.save()
        return res.status(201).json(etapas)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

// listar
const getEtapa = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const etapasDB = await Etapa.find({estado})//select * from etapas
            return res.json(etapasDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actuañizar
const updateEtapaByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const etapas = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.json(etapas)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { createEtapa, 
    getEtapa, 
    updateEtapaByID}