import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const BaseAdmin = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-900">
        <div className=" flex justify-between  text-white page-container  gap-x-10">
          <div className=" flex py-3 gap-x-10">
            <NavLink className="hover:text-zinc-400" to="./homeadmin">
              Trang Chủ
            </NavLink>
            <NavLink className="hover:text-zinc-400" to="./createsanpham">
              Quản Lý Sản Phẩm
            </NavLink>
            <NavLink
              className="hover:text-zinc-400"
              to="./createdetailssanpham"
            >
              Quản Lý Chi Tiết Sản Phẩm
            </NavLink>
            <NavLink className="hover:text-zinc-400" to="/warrantypolicy">
              Quản Lý Bản Hành
            </NavLink>
            <NavLink className="hover:text-zinc-400" to="./order">
              Quản Lý Đơn Hàng
            </NavLink>
          </div>
          <div className="flex  gap-x-5">
            <input
              placeholder="Search..."
              className="  rounded-lg w-[300px] my-2 text-black outline-none outline-offset-0	border border-cyan-900 focus:outline-blue-400"
            />
            <button className=" py-1 px-1 bg-cyan-600 text-white rounded-lg my-2 hover:bg-cyan-900">
              Tìm Kiếm
            </button>
          </div>
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

export default BaseAdmin;
