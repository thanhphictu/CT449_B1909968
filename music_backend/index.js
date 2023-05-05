const express = require('express');
const cors = require('cors');
const route = require('./src/routes');
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

let port = process.env.PORT || 1234;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "*"
}));

mongoose.set("strictQuery", false);
// const uri = `mongodb+srv://tphi10761:${process.env.DB_PASSWORD}@cluster0.vjpadmg.mongodb.net/?retryWrites=true&w=majority`
const uri = 'mongodb://127.0.0.1:27017/music-vuedb';
mongoose.connect(uri,
    {
        useNewUrlParser: false,
    }
);
mongoose.connection
    .once("open", () => console.log("DB Connected"))
    .on("error", (error) => {
        console.log(`Error : ${error}`);
    });


route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})