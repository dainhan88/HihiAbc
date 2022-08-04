const productDetailsBuilder = require("../controllers/productDetailsController");
const express = require("express");

const routes = express.Router();

routes.get("/", productDetailsBuilder.list_all_productDetailss);
routes.post("/", productDetailsBuilder.create_a_productDetails);
routes.get("/:idSanPham", productDetailsBuilder.read_a_productDetails);
routes.get(
  "/infoProductDetails/:idSanPham",
  productDetailsBuilder.getInfoProductDetails
);
routes.put("/:idSanPham", productDetailsBuilder.update_a_productDetails);
routes.delete("/:idSanPham", productDetailsBuilder.delete_a_productDetails);

module.exports = routes;
