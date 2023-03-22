const ShoppingModel = require("../models/shoppingModel");
const conn = require("../utility/conn");
require("dotenv").config();

const ShoppingService = {
  async addShopping(data) {
    try {
      const newShopping = new ShoppingModel({
        orderId: data.orderId,
        customerId: data.customerId,
        amount: data.amount,
        items: data.items
      });
      let result = await newShopping.save();
      return {
        message: "Shopping added successfully",
        shopping: result._doc,
      };
    } catch (err) {
      return err;
    }
  },
};

module.exports = ShoppingService;
