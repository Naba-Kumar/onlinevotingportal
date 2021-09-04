const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')

const express = require('express')
const app = express()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({path:'./config.env'});

require('./db/dbConnection')


const router = require('./router/main')


app.use(express.json())
app.use(router)

port = process.env.PORT || 5000;



if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    // const path = require("path");

    // app.get("*", (req, res) => {

    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    // })


}

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})