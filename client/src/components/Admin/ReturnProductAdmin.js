import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const ReturnProductAdmin = () => {
  const [dataReturn, setDatadataReturn] = useState();
  useEffect(() => {
    axios.get("/api/returnproduct").then((res) => {
      setDatadataReturn(res.data);
    });
  }, []);

  const handleChangeStatus = (id, status) => {
    console.log(id, status);
    axios
      .put(`/api/returnproduct/${id}`, { tinhTrangXuLyDoiTra: status })
      .then((res) => {});
  };
  return (
    <div className="page-container">
      <h1 className="text-red-600 uppercase font-bold my-20 text-[20px] text-center ">
        Yêu cầu đổi - trả sản phẩm từ khách hàng
      </h1>
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[18px] text-orange-500 uppercase bg-gray-50 ">
          <tr>
            <th className="py-3 px-6">Mã Đơn Hàng</th>
            <th className="py-3 px-6">Họ Tên</th>
            <th className="py-3 mx-6">Số Điện Thoại</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Lý Do</th>
          </tr>
        </thead>
        <tbody>
          {dataReturn &&
            dataReturn.map((item) => (
              <React.Fragment>
                <tr
                  key={uuidv4()}
                  className={`${
                    item.tinhTrangXuLyDoiTra === "Chờ xử lý"
                      ? "bg-yellow-300"
                      : ""
                  }`}
                >
                  <th>{item.maDonHangKhachDoiTra}</th>
                  <th>{item.hoTenKhachDoiTra}</th>
                  <th>{item.soDienThoatKhachDoiTra || ""}</th>
                  <th>{item.emailKhachDoiTra}</th>
                  <th>{item.lyDoKhachDoiTra}</th>
                  <select
                    className={`px-2 uppercase font-bold text-red-500 cursor-pointer  ${
                      item.tinhTrangXuLyDoiTra === "Chờ xử lý"
                        ? "bg-yellow-300"
                        : ""
                    } `}
                    id="personlist"
                    name="tinhTrangXuLyDoiTra"
                    onChange={(e) => {
                      handleChangeStatus(item._id, e.target.value);
                    }}
                  >
                    <option value="">{item.tinhTrangXuLyDoiTra}</option>
                    <option value="Chờ xử lý">Chờ xử lý</option>
                    <option value="Đã nhận sp hoàn">Đã nhận sp hoàn</option>
                    <option value="Đang kiểm tra sản phẩm hoàn">
                      Đang kiểm tra sản phẩm hoàn
                    </option>
                    <option value="Đồng ý đổi trả sản phẩm">
                      Đồng ý đổi trả sản phẩm
                    </option>
                    <option value="Sản phẩm đổi trả không đạt yêu cầu">
                      Sản phẩm đổi trả không đạt yêu cầu
                    </option>
                  </select>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnProductAdmin;
