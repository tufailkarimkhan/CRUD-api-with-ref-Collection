# Introduction

    * this is simple CRUD API

# Requirement

    * node.js:https://nodejs.org/en/
    * MongoDB:https://www.mongodb.com/try/download/community
    * Postman API:https://www.postman.com/downloads/

# Recommended modules

    * Express
    * body-parser
    * mongoose
    * path

# How to Install

    * "npm i"

# How to Start Server

    * "node server.js"

# How to Create Data

    * Type localhost:8000/create/category in url Bar
    * Input: {"categoryName": "cloth" }
    * Output: status:1 message: Successfully created
    * Similarly can create product data

# How to Read Data

    * Type localhost:8000/readAll in url Bar
    * show all Data which store inside the collection.

# How to Update Data

    * Type localhost:8000/update in url Bar

    * input: {
    "find": "Shirt",
    "update": {
        "productName": "Shirts",
        "unitPrice": 20000
    }}
    * output: status:1 message:Updated Successfully

# How to Delete Data

    * Type localhost:8000/delete in url Bar
    * input: {"productName":"Shirt"}
    * output:status:1 message:Product Delted.

# Video Tutorial

    * How to start server
    

https://user-images.githubusercontent.com/75901043/137769951-0faeedc2-7e42-46d1-8333-79a7a4a7a0ff.mp4


    * Testing the API using Postman
    

https://user-images.githubusercontent.com/75901043/137771525-305b23e7-c491-47b4-8610-1cc7dac90a03.mp4


