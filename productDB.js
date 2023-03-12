
const connectDB = require("./db/connect");

const Product = require("./models/product");
const ProductsJson = require("./data.json");
//uri="mongodb+srv://Abrarsh2209:yfh5JEt7lTb53ZxM@cluster0.2kgbnxq.mongodb.net/AbrarAPI?retryWrites=true&w=majority";
const start = async()=>{
    try{
        await connectDB("mongodb+srv://Abrarsh2209:yfh5JEt7lTb53ZxM@cluster0.2kgbnxq.mongodb.net/AbrarAPI?retryWrites=true&w=majority");
        await Product.deleteMany();
        await Product.create(ProductsJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}
start();