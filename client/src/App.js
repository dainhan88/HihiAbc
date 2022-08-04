import "./App.css";
import Base from "./components/Base";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetailsAdmin from "./components/Admin/ProductDetailsAdmin";
import ProductAdmin from "./components/Admin/ProductAdmin";
import Cart from "./components/Cart/Cart";
import ProceedToOrder from "./components/Cart/ProceedToOrder";
import WarrantyPolicy from "./components/Admin/WarrantyPolicy";
import ProductsDetailsClient from "./components/ProductDetailsClient";
import BaseAdmin from "./components/BaseAdmin";
import Order from "./components/Admin/Order";
import HomeAdmin from "./components/Admin/HomeAdmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />}></Route>
        <Route path="/sanpham" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/ProceedToOrder" element={<ProceedToOrder />}></Route>
        <Route path="/warrantypolicy" element={<WarrantyPolicy />}></Route>
        <Route
          path="/sanpham/:sanphamid"
          element={<ProductsDetailsClient />}
        ></Route>
      </Route>

      <Route path="/admin" element={<BaseAdmin />}>
        <Route path="homeadmin" element={<HomeAdmin />}></Route>
        <Route path="createsanpham" element={<ProductAdmin />}></Route>
        <Route path="order" element={<Order />}></Route>
        <Route
          path="createdetailssanpham"
          element={<ProductDetailsAdmin />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
