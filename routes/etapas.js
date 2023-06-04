const { Router } = require('express')
const { createEtapa, getEtapa, updateEtapaByID} =
 require('../controllers/etapas')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapa)

//actualizar
router.put('/:id', updateEtapaByID)

module.exports = router;