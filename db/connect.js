const mongoose = require("mongoose");

uri="mongodb://mongo:pCaTfWJVx1BePOCgVjBo@containers-us-west-183.railway.app:5492";
const connectDB=()=>{
    //console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}
module.exports = connectDB;
