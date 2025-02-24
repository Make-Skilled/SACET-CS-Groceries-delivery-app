const express = require("express");
const { addToCart, getCart } = require("../../controllers/customer/customerController")

const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/cart", getCart);

module.exports = router;
