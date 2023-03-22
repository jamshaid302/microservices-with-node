const express = require("express");
const router = express.Router();
const ShoppingService = require("../services/shopping");
const middleware = require("../middleware/authorize");

router.post("/add", middleware.mustBeLoggedIn, async (req, res) => {
  try {
    const result = await ShoppingService.addShopping(req.body);
    if (result.errors) {
      return res.status(400).send(result.errors);
    }
    return res.status(201).send(result);
  } catch (e) {
    return e;
  }
});

module.exports = router;
