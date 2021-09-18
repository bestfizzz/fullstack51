const Joi = require("joi");
const jwt = require('jsonwebtoken');
const middlewareVerify = (req, res, next) => {
    const token = req.header('auth-token');
    console.log('Token from client: ', token);
    if (!token) return res.status(401).send('Forbidden !!!');
    try {
        // check token correct
        req.user = jwt.verify(token, 'jsonwebtoken');
        next();
    } catch (e) {
        res.status(400).send('Token incorrect')
    }
}
const mangaValidate = (manga) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        author: Joi.string().min(6).required(),
        price: Joi.number().integer().min(10000).required(),
    });
    console.log("joi validated");
    console.log(schema.validate(manga));
    return schema.validate(manga);
};

const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};
const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
};

module.exports = { mangaValidate, registerValidate, loginValidate,middlewareVerify };