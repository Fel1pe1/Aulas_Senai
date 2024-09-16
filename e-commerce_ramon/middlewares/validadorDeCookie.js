const jwt = require('jsonwebtoken')

function validadorDeCookie(req, res, next) {
    const token = req.cookie.TokenAulaBE
    
    if(!token) {
        return res.status(401).send({mensagem: 'não autorizado'})
    }
    try{
        const decodificado = jwt.verify(token, 'jwt_secret_key')
        next();
    }catch{
        return res.status(401).send({mensagem: 'não autorizado'})
    }
}

module.exports = {validadorDeCookie}