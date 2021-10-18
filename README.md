# Introduction

    * this is simple CRUD API

# Requirement

    *node.js:https://nodejs.org/en/
    *MongoDB:https://www.mongodb.com/try/download/community
    *Postman API:https://www.postman.com/downloads/

# How to Install Recommended modules

    *Express
    *body-parser
    *mongoose
    *path

# How to Install

    * "npm i"

# How to Start Server

    * "node server.js"

# How to Create Data

    *Type localhost:8000/create/category in url Bar
    *Input: {"categoryName": "cloth" }
    *Output: status:1 message: Successfully created
    *Similarly can create product data

# How to Read Data

    *Type localhost:8000/readAll in url Bar
    *how all Data which store inside the collection.

# How to Update Data

    *Type localhost:8000/update in url Bar

    *input: {
    "find": "Shirt",
    "update": {
        "productName": "Shirts",
        "unitPrice": 20000
    }}
    *output: status:1 message:Updated Successfully

# How to Delete Data

    *Type localhost:8000/delete in url Bar
    *input: {"productName":"Shirt"}
    *output:status:1 message:Product Delted.

# Video Tutorial

    *How to start server
    *Testing the API using Postman
