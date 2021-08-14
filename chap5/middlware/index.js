const express=require("express")
const app=express()
var checkRequest=(req,res,next)=>{
    if(req.url==='/admin'){
        res.send('ban ko co quyen truy cap')
    }else{
        next()
    }
}
app.use(checkRequest)
app.get('/',function (req,res){
    res.send('truy cap homepage thanh cong')
})
app.get('/admin',function(req,res){
    res.send('truy cap admin thanh cong')
})
app.listen(8080)