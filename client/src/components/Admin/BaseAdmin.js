import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const BaseAdmin = ({ children }) => {
  const [dataOrder, setDataOrder] = useState();
  const [countWarranty, setCountWarranty] = useState();
  const [countReturn, setcountReturn] = useState();
  const [loading, setLoading] = useState(true);
  const [stateOrder, setStateOrder] = useState();
  const trangThai = "Chờ xác nhận";
  const warrantyStatus = "Chờ xử lý";
  const ReturnStatus = "Chờ xử lý";
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
      <div className="bg-slate-900 h-[70px] ">
        <div className=" flex justify-center py-4 text-white page-container  ">
          <div className=" flex py-3  gap-x-7">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block relative text-blue-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block relative text-white px-2 rounded-lg"
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
              to="./createsanpham"
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
              <div className="absolute animate-pulse  top-[-15px] right-[-20px] w-6 h-6 text-center text-white bg-red-600 rounded-full">
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
              <div className="absolute animate-pulse  top-[-15px] right-[-20px] w-6 h-6 text-center text-white bg-red-600 rounded-full">
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
              <div className="absolute animate-pulse  top-[-15px] right-[-20px] w-6 h-6 text-center text-white bg-red-600 rounded-full">
                {countReturn}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
      {/* <div>
        <footer className="bg-gray-600">
          <div className=" text-white flex justify-around py-6 page-container text-sm gap-x-10">
            <div>
              <h4 className="text-lg">Thông Tin Công Ty</h4>
              <ul>
                <li>
                  Trụ sở : Số 14 ngõ 273 Đường Nguyễn Khoái, Phường Thanh Lương,
                  Quận Hai Bà Trưng, Thành Phố Hà Nội, Việt Nam
                </li>
                <li>Mã số thuế : 0107554071</li>
                <li>
                  Địa điểm Kinh doanh: Số 10 Ngõ 7 Phố Phương Liệt, Quận Thanh
                  Xuân, Thành phố Hà Nội.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg">Liên Hệ</h4>
              <ul>
                <li>
                  Địa chỉ: Số 10 ngõ 7 Phố Phương Liệt, Phường Phương Liệt, Quận
                  Thanh Xuân, Hà Nội
                </li>
                <li>
                  <a href="tel: 0969885858">Điện thoại:{""} 0969885858</a>
                </li>
                <li>Email: CongtyAntech@gmail.com</li>
              </ul>
            </div>
          </div>
        </footer>
      </div> */}
    </div>
  );
};

export default BaseAdmin;
