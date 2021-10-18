const express = require("express");
const route = express.Router();
const {
  postCategoryRoute,
  postProductRoute,
  postReadOneRoute,
  postReadAllRoute,
  postUpdateRoute,
  productDeleteRoute,
} = require("../controller/controller"); //here i import controller.js as module

// route for category create
route.post("/create/category", postCategoryRoute);
// route for product create
route.post("/create/product", postProductRoute);
// route for read one product
route.post("/readOne", postReadOneRoute);
// route for read all product
route.post("/readAll", postReadAllRoute);
// route for update product
route.post("/update", postUpdateRoute);
// route for delete product
route.post("/delete", productDeleteRoute);
module.exports = route; // here i export route
