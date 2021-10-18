const mongoose = require("mongoose");

//here i make schema of product

const product = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  qtyPerUnit: {
    type: Number,
    required: true,
    default: 0,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  unitInStock: {
    type: Number,
    default: 0,
  },
  discontinued: {
    type: Boolean,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category", //here i refer category id
  },
});

module.exports = mongoose.model("Product", product);
