import "./App.css";
import Base from "./components/Base";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetailsAdmin from "./components/Admin/CreateDetailsProductAdmin";
import ProductAdmin from "./components/Admin/ProductAdmin";
import Cart from "./components/Cart/Cart";
import ProceedToOrder from "./components/Cart/ProceedToOrder";
import WarrantyPolicy from "./components/WarrantyPolicy";
import ProductsDetailsClient from "./components/ProductDetailsClient";
import BaseAdmin from "./components/Admin/BaseAdmin";
import Order from "./components/Admin/Order";
import OrderWait from "./components/Admin/OrderWait";
import OrderDelivering from "./components/Admin/OrderDelivering";
import OrderDelivered from "./components/Admin/OrderDelivered";
import HomeAdmin from "./components/Admin/HomeAdmin";
import OrderHeader from "./components/Admin/OrderHeader";
import Warehouse from "./components/Admin/Warehouse";
import CreateProduct from "./components/Admin/CreateProduct";
import AdminProductDetails from "./components/Admin/ProductDetailsAdmin";
import OrderSuccess from "./components/Cart/OrderSuccess";
import Returnpolicy from "./components/Returnpolicy";
import Policy from "./components/Policy";
import RemotePolicy from "./components/RemotePolicy";
import CreateProducers from "./components/Admin/CreateProducers";
import Producers from "./components/Admin/Producers";
import UpdateProductAdmin from "./components/Admin/UpdateProductAdmin";
import Insurance from "./components/Insurance";
import WarrantyClaim from "./components/WarrantyClaim";
import LoginForm from "./components/Admin/LoginForm";
import WarrantyClaimAdmin from "./components/Admin/WarrantyClaimAdmin";
import ReturnProductAdmin from "./components/Admin/ReturnProductAdmin";
import Zalolink from "./components/Zalolink";
import Abc from "./components/Admin/Abc";
import OrderLookup from "./components/OrderLookup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/zalo-link" element={<Zalolink />}></Route>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />}></Route>
        <Route path="/sanpham" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/ProceedToOrder" element={<ProceedToOrder />}></Route>
        <Route path="/tra-cuu-don-hang" element={<OrderLookup />}></Route>
        <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
        <Route path="/warrantypolicy" element={<WarrantyPolicy />}></Route>
        <Route path="/returnpolicy" element={<Returnpolicy />}></Route>
        <Route path="/remotepolicy" element={<RemotePolicy />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/insurance" element={<Insurance />}></Route>
        <Route
          path="/sanpham/:sanphamid"
          element={<ProductsDetailsClient />}
        ></Route>
      </Route>

      <Route path="/admin" element={<BaseAdmin />}>
        <Route path="homeadmin" element={<HomeAdmin />}></Route>
        <Route path="productAdmin" element={<ProductAdmin />}></Route>

        <Route
          path="updateproductadmin/:sanphamid"
          element={<UpdateProductAdmin />}
        ></Route>
        <Route path="createdroducers" element={<CreateProducers />}></Route>
        <Route path="producers" element={<Producers />}></Route>
        <Route
          path="warrantyclaimadmin"
          element={<WarrantyClaimAdmin />}
        ></Route>
        <Route
          path="returnproductadmin"
          element={<ReturnProductAdmin />}
        ></Route>
        <Route path="order" element={<OrderHeader />}>
          <Route index element={<Order />}></Route>
          <Route path="orders" element={<Order />}></Route>
          <Route path="orderwait" element={<OrderWait />}></Route>
          <Route path="orderdelivering" element={<OrderDelivering />}></Route>
          <Route path="orderdelivered" element={<OrderDelivered />}></Route>
        </Route>
        <Route path="createproduct" element={<CreateProduct />}></Route>
        <Route
          path="adminproductdetails"
          element={<AdminProductDetails />}
        ></Route>
        <Route path="warehouse" element={<Warehouse />}></Route>
        <Route path="abc" element={<Abc />}></Route>
        <Route
          path="createdetailssanpham"
          element={<ProductDetailsAdmin />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
