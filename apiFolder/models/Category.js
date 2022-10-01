const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
 cat:{
    type:String,
    required:true
 }
});

module.exports = mongoose.model("Category", CategorySchema);