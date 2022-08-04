// import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./config/database/connectdb");
const PORT = 3001;

global.Task = require("./models/taskModel");
global.Product = require("./models/productModels");
global.ProductDetails = require("./models/ProductDetails");
global.order = require("./models/orderModels");
const routes = require("./routes");
// set up dependencies
db.connect();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

routes(app);
app.listen(PORT);

// app.listen(PORT, () => {
//     console.log(`Our server is running on port ${PORT}`);
//   });
