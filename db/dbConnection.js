const mongoose = require('mongoose')

const DB = process.env.DATABASE 

mongoose.connect(DB ,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() => {console.log("connection successfull with DATABASE  :-)");})
.catch((err)=>{console.log("connection failed with DATABASE :-("); console.log(err)})

