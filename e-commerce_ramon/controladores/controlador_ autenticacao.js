const db = require('../db.json')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    try{
        const {email,senha} = req.body
        if(!email || !senha){
            res.send({erro:'email ou senha não enviado'})
        }

        const cliente = lista_clientes.find(
            (cliente) => cliente?.email == email
            )

    if(!cliente){
        res.status(404).send({error:'not found'})
    }

    const senhaValida = bcrypt.compareSync(senha, cliente.senha)
    if(!senhaValida){
        res.send({error:'a senha não é valida'})
    }

        res.send({message:'ok'})
    } catch (e) {
        console.log(e)
    } 
}


module.exports = {}