const mongoose = require('mongoose');
const db = "mongodb://localhost/shopping-cart-database";

async function connect() {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("connect database success...");
    }
    catch(err) {
        console.log("connect database failed...", err);
    }
}

module.exports = { connect };