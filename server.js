const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./server/router/routes");
const app = express();
const port = 8000;

// parsing all incoming request form (req.body{})
app.use(bodyparser.urlencoded());
app.use(bodyparser.json()); //here i use body-parser.json to send json data

// setting route to router.js
app.use("/", routes);

// here i connect database to our node project
mongoose
  .connect("mongodb://localhost:27017/soluLab")
  .then(() => {
    console.log("Database Connected");
    // here i want to execute our project when database connected successfully.
    app.listen(port, () => {
      console.log(`Test listen localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
