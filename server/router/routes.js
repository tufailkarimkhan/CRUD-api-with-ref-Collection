const express = require("express");
const route = express.Router();
const {
  // createRoute,
  // readRoute,
  // updateRoute,
  // deleteRoute,
  postCategoryRoute,
  postProductRoute,
  postReadOneRoute,
  postReadAllRoute,
  postUpdateRoute,
  productDeleteRoute,
  // postDeleteRoute,
} = require("../controller/controller");

// route for category create
route.post("/create/category", postCategoryRoute);
// route for product create
route.post("/create/product", postProductRoute);
// route for product read
route.post("/readOne", postReadOneRoute);
route.post("/readAll", postReadAllRoute);
route.post("/update", postUpdateRoute);
route.post("/delete", productDeleteRoute);
module.exports = route;
