const express = require('express');
const app = express();
const mongoose=require('mongoose')
const MangaModel=require("./model/MangaModel")
const mangaRouter = require('./router/mangaRouter');
const db='mongodb://localhost/mangas'
const port=2000
mongoose.connect(db)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/manga",mangaRouter)//de trc express thi loi
app.listen(port, () => console.log('Server dang lang nghe tren cong',port));