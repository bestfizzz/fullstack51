const express = require("express");
const router = require("./routers/index.js");
const mongoose = require("mongoose");
const { middlewareVerify } = require("./v/validate.js");
const app = express();
// connect to mongodb
const db = "mongodb://localhost/mangas-mvc";
const port = 2000;

mongoose.connect(db);

app.use(express.json());
app.use('/manga',
);

router(app);

app.listen(port, () => console.log("Server is running on port", port));