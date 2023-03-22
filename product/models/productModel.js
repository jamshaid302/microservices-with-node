const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    unit: Number,
    price: Number,
    available: Boolean,
    supplier: String
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;
