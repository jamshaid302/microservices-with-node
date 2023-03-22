const ProductModel = require("../models/productModel");
const conn = require("../utility/conn");
require("dotenv").config();

const ProductService = {
  async addProduct(data) {
    try {
      const newProduct = new ProductModel({
        name: data.name,
        unit: data.unit,
        price: data.price,
        available: data.available,
        supplier: data.supplier,
      });
      let result = await newProduct.save();
      return {
        message: "Product added successfully",
        product: result._doc,
      };
    } catch (err) {
      return err;
    }
  },

  async getAllProducts () {
    try{
        let result = await ProductModel.find({});
        return {
            products : result,
        }
    }catch (e) {
        return e;
    }
}
};

module.exports = ProductService;
