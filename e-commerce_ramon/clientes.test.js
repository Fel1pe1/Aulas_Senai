const request = require('supertest');
const app = require('./index');

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200);
    });

    it('verificar se a lista de clientes está preenchida', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.body).toBeDefined();
    });
});

describe('POST /clientes', () => {
    it('criar cliente com sucesso', async () => {
        const res = await request(app).post('/clientes').send({
            nome: 'felipe etgdveste',
            email: 'felipe@teste.com',
            senha: 'senhadomal',
        });
        expect(res.status).toBe(204);
    });
});

describe('GET /clientes/:id', () => {
    it('pegar informações do cliente pelo id com sucesso', async () => {
        const res = await request(app).get('/clientes/1').send();
        expect(res.status).toBe(200);
    });
});

describe('PUT /clientes/:id', () => {
    it('atualizar o nome do cliente com sucesso', async () => {
        const res = await request(app).put('/clientes/647e9617-9d7a-4df7-adae-301f88ca49a8').send({
            nome: 'felipe update',
        });
        expect(res.status).toBe(204);
    });
});

describe('DELETE /clientes/:id', () => {
    it('deletar um cliente com sucesso', async () => {
        const res = await request(app).delete('/clientes/c0fc7a59-8608-4f81-b1b1-692ec208ed02').send();
        expect(res.status).toBe(204);
    });
});
