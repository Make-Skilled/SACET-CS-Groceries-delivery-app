const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        productId: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
          enum: ["Fruits", "Dairy", "Bakery", "Vegetables"],
        },
        inStock: {
          type: Boolean,
          default: true,
        },
        deliveryTime: {
          type: String,
          default: "30-45 min",
        },
      },
    ],
    orderedBy: {
      type: String, // Stores the email of the user
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
