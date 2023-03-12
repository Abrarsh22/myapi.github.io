const mongoose = require("mongoose");

uri="mongodb+srv://Abrarsh2209:yfh5JEt7lTb53ZxM@cluster0.2kgbnxq.mongodb.net/AbrarAPI?retryWrites=true&w=majority";
const connectDB=()=>{
    //console.log("connect db");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}
module.exports = connectDB;