const taskRoutes = require("./taskRoutes");
const productRoutes = require("./productRoutes");
const productDetails = require("./productDetailsRoutes");
const order = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const producersRoutes = require("./producersRoutes");
const warrantyclaimRoutes = require("./warrantyclaimRoutes");
const returnproductRoutes = require("./returnproductRoutes");

function routes(app) {
  app.use("/api/tasks", taskRoutes);
  app.use("/v1/auth", authRoutes);
  app.use("/v1/user", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/productDetails", productDetails);
  app.use("/api/order", order);
  app.use("/api/producers", producersRoutes);
  app.use("/api/warrantyclaim", warrantyclaimRoutes);
  app.use("/api/returnproduct", returnproductRoutes);
}
module.exports = routes;
