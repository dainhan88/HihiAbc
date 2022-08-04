const orderBuilder = require("../controllers/orderController");
const express = require("express");

const routes = express.Router();

routes.get("/", orderBuilder.list_all_orders);
routes.post("/", orderBuilder.create_a_order);
routes.get("/:idorder", orderBuilder.read_a_order);
routes.put("/:idorder", orderBuilder.update_a_order);
routes.delete("/:idorder", orderBuilder.delete_a_order);

module.exports = routes;
