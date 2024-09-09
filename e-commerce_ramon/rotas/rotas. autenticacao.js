const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador_ autenticacao')

router.post('/login', controlador.login)

module.exports = router;