const knex = require('../database/connection');

const registerCar = async (req, res) => {
    const { marca, modelo, ano, cor, valor, vendido } = req.body;

    try {
        if (vendido) {
            return res.status(404).json({ mensagem: "Não é possível inserir um carro com status de VENDIDO no banco de dados do sistema." });
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
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const listCars = async (req, res) => {
    try {
        const cars = await knex('carros');

        for (const car of cars) {
            car.valor = Number(car.valor);
        }

        return res.status(200).json(cars);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const updateCar = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, ano, cor, valor, vendido } = req.body;

    try {
        const car = await knex('carros').where({ id }).first();

        if (!car) {
            return res.status(404).json({ mensagem: "O carro não existe cadastrado no banco de dados do sistema." });
        }

        const updatedCar = await knex('carros').where({ id }).update({
            marca,
            modelo,
            ano,
            cor,
            valor,
            vendido
        });

        if (!updatedCar) {
            return res.status(400).json({mensagem: "O carro não foi atualizado"});
        }

        return res.status(200).json({mensagem: "Carro atualizado com sucesso!"});

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerCar,
    listCars,
    updateCar
}