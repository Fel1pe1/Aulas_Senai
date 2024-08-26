const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_cliente')

router.get('',controlador.listCliente )
router.get('/:id', controlador.getCliente)
router.post('',controlador.createCliente )
router.put('/:id',controlador.updateCliente)
router.delete('/:id',controlador.deleteCliente)

module.exports = router;