const joi = require('joi');

const sellerSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.'
    })
});

module.exports = sellerSchema;