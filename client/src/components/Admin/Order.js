import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";
import { converCurences, formatDate } from "../../config";
import { useCart } from "../../context/Cartcontext";
const Order = () => {
  const [dataOrder, setDataOrder] = useState();
  useEffect(() => {
    axios.get("/api/order").then((res) => {
      setDataOrder(res.data);
    });
  }, []);
  const { totalPrice } = useCart();
  return (
    <div>
      <div className=" px-24">
        <h1 className="font-bold text-red-600 text-center py-10 text-[25px]">
          Đơn Hàng
        </h1>
        <div className="relative">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th className="py-3 px-6">Khách Hàng</th>
                <th className="py-3 px-6">Số Điện Thoại</th>
                <th className="py-3 px-6">Địa Chỉ</th>
                <th className="py-3 px-6">Hình Thức Thanh Toán</th>
                <th className="py-3 px-6">Tổng Tiền</th>
                <th className="py-3 px-6">Gmail</th>
                <th className="py-3 px-6">Trạng Thái</th>
                <th className="py-3 px-6">Ngày Đặt</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {dataOrder &&
                dataOrder.length > 0 &&
                dataOrder.map((item) => {
                  return (
                    <>
                      <tr className="border-t" key={item.id}>
                        <th className="px-6  uppercase font-bold text-red-500">
                          {item.hoTen}
                        </th>
                        <th className="px-6  uppercase font-bold text-red-500">
                          {item.soDienThoai}
                        </th>
                        <th className="px-6  uppercase font-bold text-red-500">
                          {item.diaChi}
                        </th>
                        <th className="px-6  uppercase font-bold text-red-500">
                          {item.hinhThucThanhToan}
                        </th>
                        <th className="px-6  uppercase font-bold text-red-500">
                          {" "}
                          {converCurences(item.tongTien)}đ
                        </th>
                        {/* select option */}
                        <th className="px-6 uppercase font-bold text-red-500">
                          {item.eMail}
                        </th>
                      </tr>
                      <tr className="mt-3 ">
                        <th>Tên sản phẩm</th>
                        <th>Màu sắc, Ram</th>
                        <th>GIá</th>
                        <th>Số lượng</th>
                      </tr>
                      {item.thongTinChiTiet.map((el) => {
                        return (
                          <tr className="">
                            <td>- {el.tenSanPham}</td>
                            <td>
                              {el.mausac} {el.ram}
                            </td>
                            <td>{el.gia}</td>
                            <td>{el.quantity}</td>
                          </tr>
                        );
                      })}
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  );
                })}
            </tbody>
            {/* <thead className=" text-left text-gray-700 uppercase ">
              <tr>
                <th className="py-3 px-6">Sản Phẩm</th>
                <th className="py-3 px-6">Chi Tiết Sản Phẩm</th>
              </tr>
            </thead>
            <tbody>
              {dataOrder &&
                dataOrder.length > 0 &&
                dataOrder.map((item) => {
                  return item.thongTinChiTiet.map((orderData) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={uuid4()}
                      >
                        <th className="py-4 px-6 font-medium text-gray-900 ">
                          {orderData.maLoaiSanPham} -{orderData.tenSanPham}
                        </th>
                        <td className="py-4 px-6">{`${orderData.mausac}-${orderData.ram}`}</td>
                      </tr>
                    );
                  });
                })}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
