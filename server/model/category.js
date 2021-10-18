const mongoose = require("mongoose");
// here i make schema of category and don't write id because i refer id in product schema
const category = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("category", category);
// here in string category is collection name means table name and without string category is schema name
