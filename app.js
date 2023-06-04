const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const etapas = require('./routes/etapas')
const clientes = require('./routes/clientes')
const universidad = require('./routes/universidad')

// middlewares
app.use('/api/tipoproyecto', tipoProyecto)
app.use('/api/etapas', etapas)
app.use('/api/clientes', clientes)
app.use('/api/universidad', universidad)

module.exports = app