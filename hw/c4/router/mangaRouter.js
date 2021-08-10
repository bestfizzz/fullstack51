const express = require('express');
const Joi = require('joi');
const mangaRouter = express.Router();

// Danh sách các loại truyện tranh
const mangas = [
    { id: '1', name: 'Trinh tham 2' },
    { id: '2', name: 'Truyen ma 2' },
    { id: '3', name: 'Lang man 2' }
];

// handling manga
mangaRouter.get('/', function (req, res) {
    res.send(mangas);
});
mangaRouter.post('/', function (req, res) {
    const { error } = validateMangas(req.body);
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);
    const manga = {
        id:mangas.length + 1,
        name: req.body.name
    };
    mangas.push(manga);
    res.send(mangas);
});


function validateMangas(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(manga);
}
mangaRouter.put('/:id',function(req,res){
    const { error,value } = validateMangas(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    else{
        const a=mangas.findIndex((manga)=>manga.id==req.params.id)
        if(a in mangas){
            mangas[a].name=value.name
            res.send(mangas)
        }else{
            console.log(`ID:${req.params.id} cant be found`)
            res.status(400).send(`Not found Id ${req.params.id} `)
        }
    }
})
mangaRouter.delete('/:id',(req,res)=>{
    const a=mangas.findIndex((manga)=>manga.id==req.params.id)
        if(a in mangas){
            mangas.splice(a,1)
            res.send(mangas)
        }else{
            console.log(`ID:${req.params.id} cant be found`)
            res.status(400).send(`Not found Id ${req.params.id}`)
        }
})
mangaRouter.get('/:id',(req,res)=>{
    const a=mangas.findIndex((manga)=>manga.id==req.params.id)
    if(a in mangas){
        res.send(mangas[a])
    }else{
        console.log(`ID:${req.params.id} cant be found`)
        res.status(400).send(`Not found Id ${req.params.id}`)
    }
    }
)
module.exports = mangaRouter;