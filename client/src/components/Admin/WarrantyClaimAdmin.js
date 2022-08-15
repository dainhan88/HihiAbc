import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const WarrantyClaimAdmin = () => {
  const [dataWarranty, setDataWarranty] = useState();
  useEffect(() => {
    axios.get("/api/warrantyclaim").then((res) => {
      setDataWarranty(res.data);
    });
  }, []);

  const handleChangeStatus = (id, status) => {
    console.log(id, status);
    axios
      .put(`/api/warrantyclaim/${id}`, { tinhTrangXuLyYeuCau: status })
      .then((res) => {});
  };
  return (
    <div className="page-container">
      <h1 className="text-red-600 uppercase font-bold my-20 text-[20px] text-center ">
        Yêu cầu bảo hành từ khách hàng
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
          {dataWarranty &&
            dataWarranty.map((item) => (
              <React.Fragment>
                <tr
                  key={uuidv4()}
                  className={`${
                    item.tinhTrangXuLyYeuCau === "Chờ xử lý"
                      ? "bg-yellow-300"
                      : ""
                  }`}
                >
                  <th>{item.maDonHangKhachYeuCau}</th>
                  <th>{item.hoTenKhachYeuCau}</th>
                  <th>{item.soDienThoatKhachYeuCau || ""}</th>
                  <th>{item.emailKhachYeuCau}</th>
                  <th>{item.lyDoKhachYeuCau}</th>
                  <select
                    className={`px-2 uppercase font-bold text-red-500 cursor-pointer  ${
                      item.tinhTrangXuLyYeuCau === "Chờ xử lý"
                        ? "bg-yellow-300"
                        : ""
                    } `}
                    id="personlist"
                    name="tinhTrangXuLyYeuCau"
                    onChange={(e) => {
                      handleChangeStatus(item._id, e.target.value);
                    }}
                  >
                    <option value="">{item.tinhTrangXuLyYeuCau}</option>
                    <option value="Chờ xử lý">Chờ xử lý</option>
                    <option value="Đã chuyển giao">Đã chuyển giao</option>
                    <option value="Đang bảo hành">Đang bảo hành</option>
                    <option value="Hoàn thành">Hoàn thành</option>
                  </select>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarrantyClaimAdmin;
