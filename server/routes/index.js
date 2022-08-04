const taskRoutes = require("./taskRoutes");
const productRoutes = require("./productRoutes");
const productDetails = require("./productDetailsRoutes");
const order = require("./orderRoutes");

function routes(app) {
  app.use("/api/tasks", taskRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/productDetails", productDetails);
  app.use("/api/order", order);
}
module.exports = routes;
