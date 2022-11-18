const knex = require('../database/connection');

const registerSeller = async (req, res) => {
    const { nome } = req.body;

    try {
        const seller = await knex('vendedores').insert({
            nome
        }).returning('*');

        return res.status(201).json(seller[0]);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerSeller
}