const joi = require('joi');

const loginSchema = joi.object({
    email: joi.string().required().messages({
        'any.required': 'Por favor, insira seu e-mail.',
        'string.empty': 'Por favor, insira seu e-mail.',
    }),
    senha: joi.string().required().messages({
        'any.required': 'Por favor, insira sua senha.',
        'string.empty': 'Por favor, insira sua senha.'
    })
});

module.exports = loginSchema;