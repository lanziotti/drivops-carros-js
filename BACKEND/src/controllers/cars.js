const knex = require('../database/connection');

const registerCar = async (req, res) => {
    const { marca, modelo, ano, cor, valor, vendido } = req.body;

    try {
        if (vendido) {
            return res.status(404).json({mensagem: "Não é possível inserir um carro com status de VENDIDO no banco de dados do sistema."});
        }

        const registeringCar = await knex('carros').insert({
            marca,
            modelo,
            ano,
            cor,
            valor,
            vendido
        }).returning('*');

        return res.status(201).json(registeringCar[0]);

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerCar
}