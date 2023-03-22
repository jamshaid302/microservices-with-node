const express = require("express");
const router = express.Router();
const ProductService = require("../services/product");
const middleware = require("../middleware/authorize");

router.post("/add", async (req, res) => {
  try {
    const result = await ProductService.addProduct(req.body);
    if (result.errors) {
      return res.status(400).send(result.errors);
    }
    return res.status(201).send(result);
  } catch (e) {
    return e;
  }
});

router.get("/get-products-list", async (req, res) => {
  try {
    const result = await ProductService.getAllProducts();
    res.status(200).send(result);
  } catch (e) {
    return e;
  }
});

module.exports = router;
