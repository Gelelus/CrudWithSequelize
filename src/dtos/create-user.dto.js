const Joi = require('@hapi/joi');

const validationUserSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,}$'))
        .required(),

    age: Joi.number()
        .integer()
        .min(12)
        .required(),
})

module.exports = validationUserSchema;