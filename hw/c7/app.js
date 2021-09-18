const express=require("express")
const app=express()
const mongoose=require('mongoose')
const userRouter=require('./router/userRouter')
const productRouter=require('./router/productRouter')
const orderRouter=require('./router/orderRouter')
const db = "mongodb://localhost/app"
const port=8080
mongoose.connect(db);
app.use(express.json());
app.use('/api/v1/users',userRouter)
app.use('/api/v1/products',productRouter)
app.use('/api/v1/orders',orderRouter)
app.get('/',(req,res)=>{
    res.send('working')
})
// start server

app.listen(port, () => console.log(`Server is listening at ${port}...`));
