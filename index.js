"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT ||8000 ;

//to use json data:
app.use(express.json());

//Connected to MongoDB
require("./src/dbConnection");

app.all("/", (req, res) => {
  res.send("Welcome to BlogAPI");
});

app.use("/blog", require("./src/routes/blogRoute"));

// Synchronization:
require('./src/sync')()


//Error Handler:
app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));


