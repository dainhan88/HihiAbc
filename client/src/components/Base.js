import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/Cartcontext";
const Base = ({ children }) => {
  const { calcQuantity } = useCart();
  return (
    <div>
      <div className="  bg-gray-500 p-3 h-50 w-100  font-[500]   ">
        <div className=" flex justify-between  text-white page-container gap-x-10">
          <div className=" flex py-3 gap-x-10">
            <NavLink className="hover:text-zinc-400" to="/">
              Trang Chủ
            </NavLink>
            <NavLink className="hover:text-zinc-400" to="/sanpham">
              Sản Phẩm
            </NavLink>
            <NavLink className="hover:text-zinc-400" to="/warrantypolicy">
              Chính Sách Bản Hành
            </NavLink>
          </div>
          <div className="flex  gap-x-5">
            <input
              placeholder="Search..."
              className="  rounded-lg w-[300px] my-2 text-black outline-none outline-offset-0	border border-cyan-900 focus:outline-blue-400"
            />
            <button className=" py-1 px-1 bg-cyan-600 text-white rounded-lg my-2 hover:bg-cyan-900 transition-all">
              Tìm Kiếm
            </button>
          </div>

          {/* cart icons */}
          <NavLink
            to="/cart"
            className="fixed top-1/4 w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center right-[50px] cursor-pointer"
          >
            <span className="  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span className="absolute -top-[10px] -right-[10px] bg-red-500 border border-gray-300 rounded-full w-[25px] h-[25px] flex items-center justify-center">
              {calcQuantity() || 0}
            </span>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
      <div>
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
            {/* <div>
              <a href="" className="text-lg">
                Chính Sách Bảo Hành
              </a>
            </div> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
