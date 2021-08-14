const express=require('express')
const app=express()
const mongoose=require('mongoose')
const CarModel=require('./model/CarModel')
const db='mongodb://localhost/mangas'
const port=8080
mongoose.connect(db)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('api working')
})
app.get('/cars', (req, res) => {
    console.log(req.query.name);
    CarModel.find({ name: req.query.name }).exec((err, cars) => {
        if (err) {
            res.send('Khong the lay thong tin car')
        } else {
            console.log('Lay thanh cong cars');
            res.json(cars);
        }
    })
})
app.put('/car/:id',(req,res)=>{
    CarModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name }},
        { upsert: true },
        (err, car) => {
            if (err) {
                res.send('Xay ra loi update !!!');
            } else {
                app.get(`/car/${_id}`)
                // 2. return thanh cong hay that bai
                res.send(200);
            }
        }
    )
})
app.get('/car/:id',(req,res)=>{
    CarModel.findOne({
        _id: req.params.id
    }).exec((err, car) => {
        if (err) {
            res.send('Co loi xay ra...');
        } else {
            console.log('get car by ID');
            res.json(car);
        }
    });
})
app.post('/car',(req,res)=>{
    var car =new carModel()
    car.name=req.body.name
    car.manufacture=req.body.manufacture
    car.price=req.body.price
    car.save((err,car)=>{
        if(err){
            res.send('Error luu thong tin car')
        }else{
            console.log('luu thanh cong')
            res.send(car)
        }
    })
})
app.listen(port,()=>{
    console.log('dang lang nghe o cong:',port)
})