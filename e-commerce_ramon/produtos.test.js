const request = require('supertest');
const app = require('./index');

describe('GET /produto', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produto').send();
        expect(res.status).toBe(200);
    });
});

describe('POST /produto', () => {
    it('criar produto com sucesso', async () => {
        const res = await request(app).post('/produto').send({
            nome: 'Novo Produto',
            descricao: 'Descrição do novo produto',
            preco: 8237,
        });
        expect(res.status).toBe(200);
    });
});

describe('GET /produto/:id', () => {
    it('pegar informações do produto pelo id com sucesso', async () => {
        const res = await request(app).get('/produto/3').send();
        expect(res.status).toBe(200);
    });
});

describe('PUT /produto/:id', () => {
    it('atualizar o nome do produto com sucesso', async () => {
        const res = await request(app).put('/produto/3').send({
            "nome": "atualizado",
            "descricao": "Camiseta de algodão",
            "preco": 30,
        });
        expect(res.status).toBe(200);
    });
});

describe('DELETE /produto/:id', () => {
    it('deletar um produto com sucesso', async () => {
        const res = await request(app).delete('/produto/3').send();
        expect(res.status).toBe(200);
    });
});
