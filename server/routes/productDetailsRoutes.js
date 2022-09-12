const productDetailsBuilder = require("../controllers/productDetailsController");
const express = require("express");

const routes = express.Router();

routes.get("/", productDetailsBuilder.list_all_productDetailss);
routes.post("/", productDetailsBuilder.create_a_productDetails);
routes.get("/:idSanPham", productDetailsBuilder.read_a_productDetails);
routes.get("/getDetail/:id", productDetailsBuilder.getDetail);
routes.put("/updateDetail/:id", productDetailsBuilder.upDateDetail);
routes.get("/warehouse/id", productDetailsBuilder.getProductDetail);
routes.get("/warehouse/id", productDetailsBuilder.getProductDetail);
routes.get("/v2/getAllInfo", productDetailsBuilder.getAllProductDetails);
routes.put(
  "/updateQuantity/?infoId=:infoId&?mausac=:mausac&?ram=:ram&?quantity=:quantity",
  productDetailsBuilder.UpdateQuantity
);
routes.get(
  "/infoProductDetails/:idSanPham",
  productDetailsBuilder.getInfoProductDetails
);
routes.get(
  "/checkQuantityProduct/?proID=:proID&?mausac=:mausac",
  productDetailsBuilder.checkProductDetails
);
routes.put("/:idSanPham", productDetailsBuilder.update_a_productDetails);
routes.delete("/:idSanPham", productDetailsBuilder.delete_a_productDetails);

module.exports = routes;
