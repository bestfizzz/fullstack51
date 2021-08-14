const express = require('express');
const Joi = require('joi');
const mangaRouter = express.Router();
const MangaModel = require('../model/MangaModel.js');

mangaRouter.get('/', (req, res) => {
    res.json(mangas)
});

mangaRouter.post('/', (req, res) => {
    const { error } = validateManga(req.body);
    if (error) return res.status(400).send(error.detail[0].message);
    var manga = new MangaModel();
    manga.name = req.body.name;
    manga.save((err, manga) => {
        if (err) {
            res.send("khong the them manga")
        } else {
            console.log("Da them manga thanh cong");
            res.send(manga);
        }
    });

});

function validateManga(manga) {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
    });
    return schema.validate(manga);
};

mangaRouter.put('/:id', (req, res) => {
    MangaModel.findOneAndUpdate({
        _id: req.params.id
    },
        {
            $set: {
                name: req.body.name,
            }
        }, { upsert: true },
        (err, manga) => {
            if (err) {
                res.send("xay ra loi update")
            }
            res.send(manga);
        })
});

mangaRouter.delete('/:id', (req, res) => {
    MangaModel.findByIdAndRemove({
        _id: req.params.id
    }, (err) => {
        if (err) {
            res.send("khong tim thay manga")
        } else {
            res.send("xoa thanh cong")
        }
    })
})

module.exports = mangaRouter;