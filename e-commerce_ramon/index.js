const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas_produtos = require('./rotas/rotas_produtos');
const rotas_clientes = require('./rotas/rotas_clientes');
const rotas_autenticacao = require('./rotas/rotas_autenticacao')

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/produto', rotas_produtos);
app.use('/clientes', rotas_clientes);
app.use('/auth', rotas_autenticacao)

// Porta
app.listen(3300)

module.exports = app;