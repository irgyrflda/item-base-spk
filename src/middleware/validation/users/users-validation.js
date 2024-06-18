const joi = require("joi");
const { jsonFormat } = require("../../../utils/jsonFormat");

const LoginValidation = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().trim().required().messages({
            'string.empty': 'Username Tidak Boleh Kosong'
        }),
        password: joi.string().trim().required().messages({
            'string.empty': 'password Tidak Boleh Kosong'
        })
    })
    const { error } = schema.validate(req.body);
    if (error) {
        jsonFormat(res, 202, "success", error.details[0].message)
    } else {
        next()
    }
}

const RegisterValidation = (req, res, next) => {
    const schema = joi.object({
        username: joi.string().min(8).max(12).trim().required().messages({
            'string.empty': 'Username Tidak Boleh Kosong',
            'string.min': 'username minimal 8 karakter',
            'string.max': 'username maksimal 12 karakter'
        }),
        password: joi.string().min(8).max(12).trim().required().messages({
            'string.empty': 'password Tidak Boleh Kosong',
            'string.min': 'password minimal 8 karakter',
            'string.max': 'password maksimal 12 karakter'
        }),
        confrim_password: joi.string().min(8).max(12).trim().required().messages({
            'string.empty': 'confrim password Tidak Boleh Kosong',
            'string.min': 'confrim password minimal 8 karakter',
            'string.max': 'confrim password maksimal 12 karakter'
        })
    })
    const { error } = schema.validate(req.body);
    if (error) {
        jsonFormat(res, 202, "success", error.details[0].message)
    } else {
        next()
    }
}

const UpdatePasswordValidation = (req, res, next) => {
    const schema = joi.object({
        new_password: joi.string().min(8).max(12).trim().required().messages({
            'string.empty': 'password Tidak Boleh Kosong',
            'string.min': 'password minimal 8 karakter',
            'string.max': 'password maksimal 12 karakter'
        }),
        confrim_password: joi.string().min(8).max(12).trim().required().messages({
            'string.empty': 'confrim password Tidak Boleh Kosong',
            'string.min': 'confrim password minimal 8 karakter',
            'string.max': 'confrim password maksimal 12 karakter'
        })
    })
    const { error } = schema.validate(req.body);
    if (error) {
        jsonFormat(res, 202, "success", error.details[0].message)
    } else {
        next()
    }
}

module.exports = {
    LoginValidation,
    RegisterValidation,
    UpdatePasswordValidation
}