const joi = require('joi');

const userSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.',
        'string.email': 'O campo email precisa ter um formato válido.'
    }),
    senha: joi.string().min(8).regex(/^(?=.*?[0-9]).*$/).regex(/^(?=.*?[A-Z]).*$/).required().messages({
        'any.required': 'Todos os campos são obrigatórios.',
        'string.empty': 'Todos os campos são obrigatórios.',
        'string.min': 'A senha precisa ter, no mínimo, 8 caracteres',
        'string.pattern.base': 'A senha precisa ter pelo menos um NÚMERO',
        'string.pattern.base': 'A senha precisa ter pelo menos uma LETRA MAIÚSCULA'
    })
});

module.exports = userSchema;