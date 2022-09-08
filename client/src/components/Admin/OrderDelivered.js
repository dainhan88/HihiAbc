import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { converCurences, formatDate } from "../../config";
import { v4 as uuidv4 } from "uuid";
const OrderWait = () => {
  const [dataOrder, setDataOrder] = useState();
  const [stateOrder, setStateOrder] = useState();
  const [loading, setLoading] = useState(true);

  const STATE = "Đã giao";
  useEffect(() => {
    axios.get(`/api/order/getOrderByState/${STATE}`).then((res) => {
      setDataOrder(res.data);
    });
  }, [loading]);

  const handleUpdateStateOrder = (id, state, details) => {
    axios.put(`/api/order/${id}`, { trangThai: state }).then((res) => {
      console.log(res);
      setLoading(!loading);
    });
    if (state === "Chờ xác nhận") {
      details.forEach((detail) => {
        console.log(detail);
        axios
          .put(
            `/api/productDetails/updateQuantity/infoId=${detail._id}&mausac=${
              detail.mausac
            }&ram=${detail.ram}&quantity=${-detail.quantity}`
          )
          .then((response) => {
            console.log(response);
          });
      });
    }
  };

  return (
    <div>
      <div className=" px-10">
        <div className="relative">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th className="py-3 px-6">Khách Hàng</th>
                <th className="py-3 px-6">Số Điện Thoại</th>
                <th className="py-3 px-6">Địa Chỉ</th>
                <th className="py-3 px-6">Hình Thức Thanh Toán</th>
                <th className="py-3 px-6">Tổng Tiền</th>
                <th className="py-3 px-6">Trạng Thái</th>
                <th className="py-3 px-6">Ngày Đặt</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {dataOrder &&
                dataOrder.length > 0 &&
                dataOrder.map((item) => {
                  return (
                    <React.Fragment key={uuidv4()}>
                      <tr className="border-t">
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
                        <th className="px-6   font-bold text-red-500">
                          {" "}
                          {converCurences(item.tongTien)}đ
                        </th>

                        {/* select option */}
                        <select
                          className="px-2 uppercase font-bold text-red-500 cursor-pointer"
                          id="personlist"
                          onChange={(e) => {
                            handleUpdateStateOrder(
                              item._id,
                              e.target.value,
                              item.thongTinChiTiet
                            );
                          }}
                        >
                          <option value={item.trangThai}>
                            {item.trangThai}
                          </option>
                          <option value="Chờ xác nhận">Chờ xác nhận</option>
                          <option value="Đang giao">Đang Giao</option>
                          {/* <option value="Đã giao">Đã Giao</option> */}
                        </select>
                        <th className="px-6 uppercase font-bold text-red-500">
                          {formatDate(new Date(item.ngayDat))}
                        </th>
                        <th>
                          <button
                            className="px-6 justify-center cursor-pointer border bg-red-700 border-red-700 rounded-lg hover:text-black hover:bg-slate-600 transition-all uppercase font-bold text-white"
                            onClick={() => {
                              handleUpdateStateOrder(
                                item._id,
                                stateOrder,
                                item.thongTinChiTiet
                              );
                              setLoading(!loading);
                            }}
                          >
                            Cập Nhật
                          </button>
                        </th>
                      </tr>
                      <tr className="mt-3 ">
                        <th>Tên sản phẩm</th>
                        <th>Màu sắc, Ram</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                      </tr>
                      {item.thongTinChiTiet.map((el) => {
                        return (
                          <tr className="" key={uuidv4()}>
                            <td className="flex py-2 gap-x-1">
                              {" "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="17"
                                fill="#0033cc"
                                className="bi bi-arrow-right-circle-fill "
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                              </svg>{" "}
                              {el.tenSanPham}
                            </td>
                            <td>
                              {el.mausac} - {el.ram}
                            </td>
                            <td>{converCurences(el.gia)}đ</td>
                            <td className="px-6">{el.quantity}</td>
                          </tr>
                        );
                      })}
                      <br />
                      <br />
                      <br />
                      <br />
                    </React.Fragment>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderWait;
