const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "productName":String,
        "quantity":String,
        "price":String,
        "description":String

    }
)

let productModel=mongoose.model("products",schema)
module.exports={productModel}


