const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_cliente')
const { validadorDeCookie } = require('../middlewares/validadorDeCookie')

router.get('',validadorDeCookie,controlador.listCliente )
router.get('/:id', validadorDeCookie, controlador.getCliente)
router.post('',validadorDeCookie, controlador.createCliente )
router.put('/:id',validadorDeCookie ,controlador.updateCliente)
router.delete('/:id',validadorDeCookie, controlador.deleteCliente)

module.exports = router;