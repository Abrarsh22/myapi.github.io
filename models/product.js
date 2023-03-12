const mongoose = require("mongoose");

const proSchema= new mongoose.Schema({
    StartupName:{
        type:String,
        required:true
    },
    Industry: {
        type:String,
        required:true
    },
    FoundingYear:{
        type:String,
        required:true
    },
    UnicornEntryYear:{
        type:String,
        required:true
    },
    Profitin2021:{
        type:String,
        required:true
    },
    CurrentValuation: {
        type:String,
        required:true
    },
    Acquisitions: {
        type:String,
        required:true
    },
    IPOStatus: {
        type:String,
        required:true
    },
    Headquarters:{
        type:String,
        required:true
    },
    Founders: {
        type:String,
        required:true
    },
    Founded: {
        type:String,
        required:true
    },
    ProductsandServices: {
        type:String,
        required:true
    },
    Valuation:{
        type:String,
        required:true
    },
    Info: {
        type:String,
        required:true
    },
    img: {
        type:String,
        required:true
    },
})

module.exports=mongoose.model("Product",proSchema);