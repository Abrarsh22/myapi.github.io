const Product = require("../models/product");

const getAllProducts =async(req,res)=>{
    const {StartupName} = req.query;
    const queryObject={};
    if (StartupName){
        queryObject.StartupName={$regex : StartupName,$options:"le"};
        console.log(queryObject.StartupName);
    }
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 8;
    let skip = (page-1) * limit;
    let apiData = await Product.find(queryObject).skip(skip).limit(limit);
    const startups = await apiData;

    // startups = await Product.find(queryObject);
    res.status(200).json({ startups,nbHits:startups.length });
    //console.log(myData);
};
const getAllProductsTesting =async(req,res)=>{
    const startups = await Product.find(req.query);
    res.status(200).json({startups});
};

module.exports = {getAllProducts,getAllProductsTesting};