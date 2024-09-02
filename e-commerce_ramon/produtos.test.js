const request = require('supertest')
const app = require('./index')

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200);
    })
    it('verificar se a lista de produtos está cheia', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.body).toBeDefined();
    })
})  
describe('POST /produtos', () => {
    it('criar produtos com sucesso', async () => {
        const rest = await request(app).post('/produtos').send(
            {
                nome:'felipe teste',
                preço:'2000'
            }
        );
        expect(rest.status).toBe(204);
    })
})
