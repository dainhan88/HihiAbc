const returnproductBuilder = require("../controllers/returnproductController");
const express = require("express");

const routes = express.Router();

routes.get("/", returnproductBuilder.list_all_returnproducts);
routes.post("/", returnproductBuilder.create_a_returnproduct);
routes.get("/:returnproductId", returnproductBuilder.read_a_returnproduct);
routes.get("/v1/count/:status", returnproductBuilder.countItemsByState);
routes.patch("/:returnproductId", returnproductBuilder.update_a_returnproduct);
routes.delete("/:returnproductId", returnproductBuilder.delete_a_returnproduct);
routes.put("/:id", returnproductBuilder.updateStatus);
module.exports = routes;
