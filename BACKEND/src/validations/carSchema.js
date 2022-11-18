const joi = require('joi');

const carSchema = joi.object({
    marca: joi.string().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.'
    }),
    modelo: joi.string().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.'
    }),
    ano: joi.number().integer().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'number.base': 'O campo ANO precisa ser um número inteiro.'
    }),
    cor: joi.string().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.'
    }),
    valor: joi.number().positive().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'number.positive': 'O campo VALOR precisa ser um número positivo.'
    }),
    vendido: joi.boolean().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'boolean.base': 'Insira no campo VENDIDO a palavra FALSE com todos caracteres MINÚSCULOS e sem estar contido dentro de aspas.'
    })
});

module.exports = carSchema;