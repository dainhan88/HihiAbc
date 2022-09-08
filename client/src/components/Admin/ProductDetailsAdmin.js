import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { converCurences } from "../../config";
import { v4 as uuidv4 } from "uuid";
const AdminDetailsProduct = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { sanphamid } = useParams();
  const [detalsdata, setDetalsdata] = useState();
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/productDetails/v2/getAllInfo").then((res) => {
      console.log(...res.data[0].mausac);
      setDetalsdata(res.data);
    });
  }, []);
  console.log(detalsdata);
  // console.log(data);
  const [tenSanPham, settenSanPham] = useState();
  const [maLoaiSanPham, setmaLoaiSanPham] = useState();
  const [soLuong, setsoLuong] = useState();
  const [donGiaSP, setdonGiaSP] = useState();
  const [file, setFile] = useState();
  const [reload, setReload] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenSanPham", tenSanPham);
    formData.append("maLoaiSanPham", maLoaiSanPham);
    formData.append("soLuong", soLuong);
    formData.append("donGiaSP", donGiaSP);
    formData.append("hinhanh", file);
    axios.post("/api/products", formData).then((response) => {
      setReload(!reload);
    });
  };

  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="px-36">
      <div>
        <NavLink
          to="/admin/createdetailssanpham"
          type="submit"
          className=" flex w-[335px] transition-all h-10 my-5 py-2 mx-5 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill my-1"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          <p className="px-2">Thêm Chi Tiết Cho Sản Phẩm Mới</p>
        </NavLink>
      </div>

      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[18px] text-orange-500 uppercase bg-gray-50 ">
          <tr>
            <th className="py-3 px-1">Sản Phẩm</th>
            <th className="py-3 px-1">Màu Trong Kho</th>
            <th className="py-3 px-1">Ram</th>
            <th className="py-3 px-1">Đơn Giá Theo Ram</th>
          </tr>
        </thead>
        <tbody className="text-[14px] text-left  ">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <React.Fragment key={uuidv4()}>
                  <tr className="border-t">
                    <th className="px-6 flex  uppercase font-bold">
                      <img
                        src={`../images/${item.hinhanh}`}
                        alt=""
                        className=" justify-items-center w-20 h-20 object-cover  group-hover:-translate-y-2 ease-out duration-300"
                      ></img>
                      <p className="py-9 ">
                        {item.maLoaiSanPham} - {item.tenSanPham}
                      </p>
                    </th>
                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return (
                              <span key={uuidv4()}>
                                {items.mausac.join(" - ")}
                              </span>
                            );
                          }
                        })}
                    </th>
                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return (
                              <span key={uuidv4()}>
                                {items.ram.join(" - ")}
                              </span>
                            );
                          }
                        })}
                    </th>
                    <th className="">
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return (
                              <span key={uuidv4()}>
                                {items.gia
                                  .map((item) => converCurences(item))
                                  .join("đ - ")}
                                đ
                              </span>
                            );
                          }
                        })}
                    </th>
                    <th className="">
                      <button>
                        {/* <button className="border flex border-blue-500 ml-4 py-1 rounded-2xl bg-blue-500 text-white"> */}
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-eyedropper mx-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
                        </svg> */}
                        <p>Sửa</p>
                      </button>
                    </th>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetailsProduct;
