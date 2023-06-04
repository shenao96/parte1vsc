const { Router } = require('express')
const { createCliente, getCliente, updateClienteByID} =
 require('../controllers/clientes')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getCliente)

//actualizar
router.put('/:id', updateClienteByID)

module.exports = router;