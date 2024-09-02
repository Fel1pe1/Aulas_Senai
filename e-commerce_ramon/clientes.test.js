const request = require('supertest')
const app = require('./index')

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.status).toBe(200);
    })
    it('verificar se a lista de clientes está cheia', async () => {
        const res = await request(app).get('/clientes/').send();
        expect(res.body).toBeDefined();
    })
})  
// describe('POST /clientes', () => {
//     it('criar cliente com sucesso', async () => {
//         const rest = await request(app).post('/clientes').send(
//             {
//                 nome:'felipe teste',
//                 email:'felipe@texte.com',
//                 senha:'2342'
//             }
//         );
//         expect(rest.status).toBe(204);
//     })
// })

describe('Atualizar /clientes/:id', () => {
     it('Atualizar nome do cliente com sucesso', async () => {
        const res = await request(app).post('/clientes/1').send(
            {
                nome:'ffjgafiugFH',
            
            })
            expect(res.status).toBe(201)
     })
}) 

describe('Deletar /clientes/:id', () => {
    it('Cliente delado com sucesso', async () => {
       const res = await request(app).delete('/clientes/$2a$10$VDdS4mhZwjpqE2JJjYzODu.s9EjLi1h.Qtjih6QlfovKK./dh.sfG').send()
        expect(res.status).toBe(404)
    })
})