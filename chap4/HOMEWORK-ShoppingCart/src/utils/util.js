const joi = require('joi');

const getTime = () => {
     return new Date().getTime();
}

const validateFruit = (fruit) => {
    const Schema = joi.object({
        name: joi.string().min(3).required(),
        origin: joi.string().min(3).required(),
        price: joi.number().min(1).required(),
        image: joi.string().min(10).required()
    })
    return Schema.validate(fruit);
}

const changeListToObject = (list) => {
    return list.map(data => data.toObject());
}

const changeToObject = (data) => {
    return data ? data.toObject() : data;
}

const helpers = {
    sum: (a,b) => a + b,
    mul: (a,b) => a * b,
    changeTime: (t) => {
        const time = new Date(t);
        return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}   ${time.getDay()}/${time.getMonth() + 1}/${time.getFullYear()}`;
    }
}


module.exports = { getTime, validateFruit, changeListToObject, changeToObject, helpers };