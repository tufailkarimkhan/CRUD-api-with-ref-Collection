// here i import category.js and product.js
const category = require("../model/category");
const product = require("../model/product");

// here i write function to post data in side categories collection

exports.postCategoryRoute = (req, res) => {
  const categorydata = req.body; //here i store data inside categorydata which in store in req.body
  console.log(categorydata);
  const categoryCollection = new category(categorydata);
  categoryCollection
    .save()
    .then((result) => {
      console.log(result);
      res.json({ status: 1, message: "Successfully created" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: 0, message: "category Not  create" });
    });
};

// here i write function to post data in side products collection

exports.postProductRoute = (req, res) => {
  const productData = {
    productName: req.body.productName,
    qtyPerUnit: req.body.qtyPerUnit,
    unitPrice: req.body.unitPrice,
    unitInStock: req.body.unitInStock,
    discontinued: req.body.discontinued,
  };
  category
    .findOne({ categoryName: req.body.categoryName })
    .then((resultData) => {
      productData.categoryId = resultData._id;

      const productCollection = new product(productData);
      productCollection
        .save()
        .then((result) => {
          console.log(result);
          res.json({ status: 1, message: "product successfully created" });
        })
        .catch((err) => {
          console.log(err);
          res.json({ status: 0, message: "product not Created" });
        });
    });
};

// here i create funcon to read all data from collection
exports.postReadAllRoute = (req, res) => {
  product
    .find()
    .populate("categoryId", "-_id")

    .then((showData) => {
      console.log(showData);
      res.json({ status: 1, message: showData });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: 0, message: " Can't read Product " });
    });
};

// here i create funcon to read one data from collection
exports.postReadOneRoute = (req, res) => {
  product
    .findOne({ productName: req.body.productName })
    .populate("categoryId", "-_id")
    .then((showOneProduct) => {
      console.log(showOneProduct);
      res.json({ status: 1, data: showOneProduct });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: 1, message: "Sorry We Can't Find" });
    });
};

// here i create funcino for for update data in database which is used in route.js

exports.postUpdateRoute = (req, res) => {
  product
    .findOneAndUpdate({ productName: req.body.find }, req.body.update, {
      new: true,
    })
    .then((updateProduct) => {
      console.log(updateProduct);
      res.json({
        status: 1,
        message: "Updated Successfully",
        data: updateProduct,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: 0, message: "No DataUpdate" });
    });
};

// here i create funcino for delete data from database and i sue it in route.js
exports.productDeleteRoute = (req, res) => {
  product
    .findOneAndDelete({ productName: req.body.productName })
    .then((deleteResult) => {
      res.json({
        status: 1,
        message: "Product Delted.",
        data: deleteResult.productName,
      });
    })
    .catch((err) => {
      res.json({ status: 0, message: "Product Not Deleted." });
    });
};
