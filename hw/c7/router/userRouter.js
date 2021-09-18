const express = require('express');
const mongoose=require('mongoose')
const userRouter = express.Router();
const UserModel=require('../model/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const Joi = require('joi');
userRouter.get('/', (req, res) => {
    console.log(req.query.name);
    UserModel.find({ name: req.query.name }).exec((err, users) => {
        if (err) {
            res.send('Khong the lay thong tin user')
        } else {
            console.log('Lay thanh cong users');
            res.json(users);
        }
    })
})
userRouter.put('/:id',(req,res)=>{
    UserModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name }},
        { upsert: true },
        (err, user) => {
            if (err) {
                res.send('Xay ra loi update !!!');
            } else {
                userRouter.get(`/user/${_id}`)
                // 2. return thanh cong hay that bai
                res.send(200);
            }
        }
    )
})
userRouter.get('/:id',(req,res)=>{
    UserModel.findOne({
        _id: req.params.id
    }).exec((err, user) => {
        if (err) {
            res.send('Co loi xay ra...');
        } else {
            console.log('get user by ID');
            res.json(user);
        }
    });
})
userRouter.post('/',(req,res)=>{
    var user =new UserModel()
    user.name=req.body.name
    user.manufacture=req.body.manufacture
    user.price=req.body.price
    user.save((err,user)=>{
        if(err){
            res.send('Error luu thong tin user')
        }else{
            console.log('luu thanh cong')
            res.send(user)
        }
    })
})
userRouter.delete('/:id',(req,res)=>{
    UserModel.findOneAndDelete({
        _id: req.params.id
    },(err, user) => {
        if (err) {
            res.send('Xay ra loi xoa !!!');
        } else {
            userRouter.get(`/user/${_id}`)
            console.log('xoa thanh cong')
            res.send(200);
        }
    }
)
})
const registerValidate = (data) => {
    const schema = joi.object({
        name: joi.string().min(4).required(),
        email: joi.string().min(10).required(),
        password: joi.string().min(6).required(),
        phone:joi.string().min(10).required(),
    })
    return schema.validate(data);
}

const loginValidate = (data) => {
    const schema = joi.object({
        email: joi.string().min(10).required(),
        password: joi.string().min(6).required()
    })
    return schema.validate(data);
}

userRouter.post('/register', async (req, res) => {
    // 1. validate user info
    const { err } = registerValidate(req.body);
    if(err) return res.status(400).send(err.details[0].message);

    // 2. check email exists
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if(emailExists) return res.status(400).send('email exists in database');

    // 3. bcryptjs for password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    // 4. create new user
    const newUser = new UserModel();
    newUser.name = req.body.name;
    newUser.email  = req.body.email;
    newUser.password = hashPassword;
    newUser.phone=req.body.phone
    newUser.street=req.body.street
    newUser.city=req.body.city
    newUser.country=req.body.country
    newUser.avatar=req.body.avatar
    // 5. return user for client

    try {
        const user = await newUser.save();
        res.send(user);
    }
    catch(err) {
        res.status(400).send(err);
    }
})

userRouter.post('/login', async (req, res) => {
    // 1. validate user
    const { err } = loginValidate(req.body);
    if (err) return res.status(400).send(err.details[0].message);
    // 2. check email
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email is not exists in database');

    // 3. check password in database
    const passwordLogin = await bcrypt.compareSync(req.body.password, user.password);
    if(!passwordLogin) return res.status(400).send(" password khong dung");

    // 4. generated token
    const token = jwt.sign({ id: user._id }, 'jsonwebtoken');

    // 5. return token
    res.header('auth-token', token).send(token);
})

/*
create verify middleware
 */
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
/*
create router for client access with token
 */
userRouter.get('/admin', middlewareVerify, function (req, res) {
    res.send('Hello world, you access with token OK !');
})
module.exports=userRouter