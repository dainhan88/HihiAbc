const warrantyclaimBuilder = require("../controllers/warrantyclaimController");
const express = require("express");

const routes = express.Router();

routes.get("/", warrantyclaimBuilder.list_all_warrantyclaims);
routes.post("/", warrantyclaimBuilder.create_a_warrantyclaim);
routes.get("/:warrantyclaimId", warrantyclaimBuilder.read_a_warrantyclaim);
routes.get("/v1/count/:status", warrantyclaimBuilder.countItemsByState);
routes.patch("/:warrantyclaimId", warrantyclaimBuilder.update_a_warrantyclaim);
routes.delete("/:warrantyclaimId", warrantyclaimBuilder.delete_a_warrantyclaim);
routes.put("/:id", warrantyclaimBuilder.updateStatus);
module.exports = routes;
