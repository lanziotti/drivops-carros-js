const knex = require('../database/connection');

const registerSale = async (req, res) => {
    const { carro_id, valor, data_venda, vendedor_id } = req.body;

    try {
        const car = await knex('carros').where({ id: carro_id }).first();

        if (!car) {
            return res.status(404).json({ mensagem: "O carro não foi encontrado no sistema." });
        }

        const seller = await knex('vendedores').where({ id: vendedor_id }).first();

        if (!seller) {
            return res.status(404).json({ mensagem: "O vendedor não foi encontrado no sistema." });
        }

        await knex('vendas').insert({
            carro: car.modelo,
            valor,
            data_venda,
            vendedor: seller.nome,
            carro_id,
            vendedor_id
        }).returning('*');

       await knex('carros').where({ id: carro_id }).update({
            ...car,
            vendido: true
        });

        const {vendido: _, ...carData} = car;

        const salesData = {
            carro: {...carData},
            valor_vendido: valor,
            data_venda,
            vendedor: {...seller}
        }

        return res.status(201).json(salesData);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerSale
}