import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createAxios } from "../../createInstance";
import { logOutSuccess } from "../../redux/authSlice";
import { logOut } from "../../redux/apiRequest";

const BaseAdmin = ({ children }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const navigate = useNavigate();
  const [dataOrder, setDataOrder] = useState();
  const [countWarranty, setCountWarranty] = useState();
  const [countReturn, setcountReturn] = useState();
  const [loading, setLoading] = useState(true);
  const [stateOrder, setStateOrder] = useState();
  const trangThai = "Chờ xác nhận";
  const warrantyStatus = "Chờ xử lý";
  const ReturnStatus = "Chờ xử lý";
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user, dispatch, logOutSuccess);
  // console.log(user);
  useEffect(() => {
    if (!user?.admin) {
      navigate("/login");
    }
  }, []);
  const handleOnLogout = () => {
    logOut(dispatch, id, navigate, accessToken, axiosJWT);
  };
  useEffect(() => {
    axios.get(`/api/order/getOrderByState/${trangThai}`).then((res) => {
      setDataOrder(res.data);
    });
    axios.get(`/api/warrantyclaim/v1/count/${warrantyStatus}`).then((res) => {
      setCountWarranty(res.data.length);
    });
    axios.get(`/api/returnproduct/v1/count/${ReturnStatus}`).then((res) => {
      setcountReturn(res.data.length);
    });
  }, [loading]);
  return (
    <div className="">
      {/* Heading */}
      <div className="text-black  bg-black text-[15px] font-bold h-[70px] ">
        <div className=" flex justify-center py-4 text-white page-container  ">
          <div className=" flex py-3  gap-x-7">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-red-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-black px-2 rounded-lg"
              }
              to="./homeadmin"
            >
              Hiệu Quả Bán Hàng
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./productAdmin"
            >
              Quản Lý Sản Phẩm
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./adminproductdetails"
            >
              Chi Tiết Sản Phẩm
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./order"
            >
              Quản Lý Đơn Hàng
              <div className="absolute animate-pulse leading-6  top-[-15px] right-[-20px] w-6 h-6 text-center text-white bg-red-600 rounded-full">
                {dataOrder?.length}
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./warehouse"
            >
              Quản Lý Kho
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./producers"
            >
              Nhà Sản Xuất
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./warrantyclaimadmin"
            >
              Yêu Cầu BHSP
              <div className="absolute animate-pulse  top-[-15px] right-[-20px] w-6 h-6 text-center  leading-6 text-white bg-red-600 rounded-full">
                {countWarranty}
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
              }
              to="./returnproductadmin"
            >
              Yêu Cầu ĐTSP
              <div className="absolute animate-pulse  top-[-15px] right-[-20px] w-6 h-6 text-center  leading-6 text-white bg-red-600 rounded-full">
                {countReturn}
              </div>
            </NavLink>
            <span className="cursor-pointer" onClick={handleOnLogout}>
              Đăng xuất
            </span>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default BaseAdmin;
