const producersBuilder = require("../controllers/producersController");
const express = require("express");

const routes = express.Router();

routes.get("/", producersBuilder.list_all_producerss);
routes.post("/", producersBuilder.create_a_producers);
routes.get("/:producersId", producersBuilder.read_a_producers);
routes.patch("/:producersId", producersBuilder.update_a_producers);
routes.delete("/:producersId", producersBuilder.delete_a_producers);

module.exports = routes;
