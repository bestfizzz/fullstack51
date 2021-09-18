const express=require('express')
const app=express()
const mongoose=require('mongoose')
const UserModel=require('./model/UserModel')
const indexRouter=require('./router/indexRouter')
const db='mongodb://localhost/jwt-example'
const port=2000
mongoose.connect(db)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('api working')
})
app.listen(port,()=>{
    console.log('dang lang nghe o cong:',port)
})