const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const port = process.env.PORT || 5000;


const apiData = require("./data.json");
const cors = require("cors");

app.use(cors());
const products_routes =require("./routes/products");
app.get("/",(req,res)=>{
    //res.send(apiData);
    res.send("hello");
});

app.use("/api/products",products_routes);

const start = async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`${port} connected`);
        })
    }catch(error){
        console.log(error);
    }
}
start();
// app.listen(3000,()=>{
//     console.log("I am live");
// });

