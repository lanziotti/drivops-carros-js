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

const listSellers = async (req, res) => {
    try {
        const sellers = await knex('vendedores');

        return res.status(200).json(sellers);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const updateSeller = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    try {
        const seller = await knex('vendedores').where({ id }).first();

        if (!seller) {
            return res.status(404).json({ mensagem: "O vendedor não existe cadastrado no banco de dados do sistema." });
        }

        const updatedSeller = await knex('vendedores').where({ id }).update({
            nome
        });

        if (!updatedSeller) {
            return res.status(400).json({ mensagem: "O vendedor não foi atualizado." });
        }

        return res.status(200).json({ mensagem: "Vendedor atualizado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const deleteSeller = async (req, res) => {
    const { id } = req.params;

    try {
        const seller = await knex('vendedores').where({ id }).first();

        if (!seller) {
            return res.status(404).json({ mensagem: "O vendedor não existe cadastrado no banco de dados do sistema." });
        }

        const sellerDeleted = await knex('vendedores').where({ id }).del();

        if (!sellerDeleted) {
            return res.status(400).json({mensagem: "O vendedor não foi excluído."});
        }

        return res.status(200).json({mensagem: "Vendedor excluído com sucesso!"});

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerSeller,
    listSellers,
    updateSeller,
    deleteSeller
}