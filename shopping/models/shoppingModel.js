const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema(
  {
    orderId: String,
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customers",
      required: true,
    },
    amount: Number,
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        unit: { type: Number, require: true },
      },
    ],
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

const shoppingModel = mongoose.model("shopping", ShoppingSchema);

module.exports = shoppingModel;
