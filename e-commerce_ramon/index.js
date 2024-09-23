const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rotas_produtos = require('./rotas/rotas_produtos');
const rotas_clientes = require('./rotas/rotas_clientes');
const rotas_autenticacao = require('./rotas/rotas_autenticacao');
const cookiePaster = require('cookie-parser');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./docs/documentacao.yaml')

app.use(cookiePaster());
app.use(bodyParser.json());


// Rotas
app.use('/produto', rotas_produtos);
app.use('/clientes', rotas_clientes);
app.use('/auth', rotas_autenticacao);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Porta
app.listen(3300)

module.exports = app;