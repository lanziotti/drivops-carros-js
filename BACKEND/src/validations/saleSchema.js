const joi = require('joi');

const saleSchema = joi.object({
    carro_id: joi.number().integer().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'number.base': 'O campo CARRO_ID precisa ser um número inteiro.'
    }),
    valor: joi.number().positive().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'number.positive': 'O campo VALOR precisa ser um número positivo.'
    }),
    data_venda: joi.date().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'date.base': 'O campo DATA_VENDA precisa ser um formato de data válido.'
    }),
    vendedor_id: joi.number().integer().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'number.base': 'O campo VENDEDOR_ID precisa ser um número inteiro.'
    })
});

module.exports = saleSchema;