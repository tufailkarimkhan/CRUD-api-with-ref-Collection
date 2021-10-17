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
app.use(bodyparser.json());

// set view of Template engine
app.set("view engine", "ejs");
// Make virtual path for css to load the css file
app.use("/vCss", express.static(path.join(__dirname, "assets/css/style.css")));

// setting route to router.js
app.use("/", routes);

// lestion for server
mongoose
  .connect("mongodb://localhost:27017/soluLab")
  .then(() => {
    console.log("Database Connected");
    app.listen(port, () => {
      console.log(`Test listen localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
