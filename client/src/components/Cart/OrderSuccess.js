import React from "react";
import { NavLink } from "react-router-dom";
import { converCurences } from "../../config";

const OrderSuccess = ({ data }) => {
  return (
    <div className="page-container flex justify-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="97"
          height="97"
          fill="#00cc44"
          className="bi bi-check-circle-fill mt-20 mx-80"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <div className="text-[20px]">
          <p className="font-bold text-[30px] py-4">
            Quý Khách Đã Đặt Hàng Tại AnTech Việt Nam Thành Công{" "}
          </p>
          <div className="flex mx-14 gap-x-1">
            <p className="italic ">
              Tổng đài viên AnTech Việt Nam sẽ liên hệ đến quý khách trong vòng
            </p>
            <p className="italic font-bold mt-0">5 phút</p>
          </div>
          <p className="italic text-center mt-4">
            Xin cảm ơn quý khách đã cho chúng tôi cơ hội được phục vụ !
          </p>
        </div>
        <div className="mt-12">
          {data && (
            <div className="flex border px-10 flex-col gap-y-3 w-[590px] ml-32 mb-5">
              <span className="flex  gap-x-16">
                <p className="w-44">Mã đơn hàng:</p>
                <p className="font-bold">ATVN-{data._id}</p>
              </span>
              <span className="flex   gap-x-16">
                <p className="w-44">Tên khách hàng:</p>
                <p>{data.hoTen}</p>
              </span>
              <span className="flex  gap-x-16">
                <p className="w-44">Số Điện Thoại:</p>
                <p>{data.soDienThoai}</p>
              </span>
              <span className="flex  gap-x-16">
                <p className="w-44">Địa Chỉ:</p>
                <p className="">{data.diaChi}</p>
              </span>
              <span className="flex  gap-x-16">
                <p className="w-44">Hình Thức Thanh Toán:</p>
                <p>{data.hinhThucThanhToan}</p>
              </span>
              <span className="flex  gap-x-16">
                <p className="w-44">Tổng Tiền:</p>
                <p className="text-red-600">{converCurences(data.tongTien)}đ</p>
              </span>
            </div>
          )}
          <NavLink
            to="/sanpham"
            className="uppercase mx-40 hover:bg-red-500 hover:text-white transition-all  border text-[30px] px-5 border-green-500 text-green-600"
          >
            mua thêm sản phẩm khác
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
