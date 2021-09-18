const express = require("express");
const mangaRouter = express.Router();

const { validateManga } = require("../v/validate.js");
const Manga = require("../m/manga.model.js");

mangaRouter.get("/", async (req, res) => {
  try {
    const mangas = await Manga.find();
    return res.status(200).json(mangas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

mangaRouter.post("/", async (req, res) => {
  const { error } = validateManga(req.body);
  if (error) return res.status(400).send(error.details);

  try {
    let manga = await Manga.findOne({ name: req.body.name });
    if (manga)
      return res.status(400).send("Manga with the same name already exists");

    manga = new Manga({ name: req.body.name });
    await manga.save();
    res.status(200).send(manga);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

mangaRouter.put("/:manga_id", async (req, res) => {
  const { error } = validateManga(req.body);
  if (error) return res.status(400).send(error.details);

  try {
    let manga = await Manga.findById(req.params.manga_id);
    if (!manga) return res.status(404).send("Manga does not exist");
    manga = await Manga.findByIdAndUpdate(
      req.params.manga_id,
      {
        $set: { name: req.body.name },
      },
      { new: true }
    );
    return res.status(200).json(manga);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

mangaRouter.delete("/:manga_id",async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.manga_id);
    if (!manga) return res.status(404).send("Manga does not exist");
    await manga.remove();
    const mangas = await Manga.find();
    res.status(200).json(mangas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = mangaRouter;