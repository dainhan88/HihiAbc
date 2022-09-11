import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { converCurences } from "../../config";
import { v4 as uuidv4 } from "uuid";
import Products from "../Products";

const ProductAdmin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);
  const [tenSanPham, settenSanPham] = useState();
  const [maLoaiSanPham, setmaLoaiSanPham] = useState();
  const [soLuong, setsoLuong] = useState();
  const [donGiaSP, setdonGiaSP] = useState();
  const [donGiaCuSP, setdonGiaCuSP] = useState();
  const [file, setFile] = useState();
  const [reload, setReload] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenSanPham", tenSanPham);
    formData.append("maLoaiSanPham", maLoaiSanPham);
    formData.append("soLuong", soLuong);
    formData.append("donGiaSP", donGiaSP);
    formData.append("donGiaCuSP", donGiaCuSP);
    formData.append("hinhanh", file);
    axios.post("/api/products", formData).then((response) => {
      setReload(!reload);
    });
  };

  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className="page-container">
      <div>
        <NavLink
          to="/admin/createproduct"
          type="submit"
          className=" flex w-[235px] transition-all h-10 my-5 py-2 mx-5 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
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
          <p className="px-2">Thêm Sản Phẩm Mới</p>
        </NavLink>
      </div>

      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[18px] text-orange-500 uppercase bg-gray-50 ">
          <tr>
            <th className="py-3 px-6">Sản Phẩm</th>
            <th className="py-3 px-6">Hãng</th>
            <th className="py-3 px-6">Số Lượng</th>
            <th className="py-3 px-6">Đơn Giá</th>
            <th className="py-3 px-6">Giá Cũ</th>
            <th className="py-3 px-6">Hỗ Trợ</th>
          </tr>
        </thead>
        <tbody className="text-[14px] ">
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
                      <p className="py-9">
                        {item.maLoaiSanPham} - {item.tenSanPham}
                      </p>
                    </th>
                    <th className="px-6  uppercase font-bold">
                      {item.maLoaiSanPham}
                    </th>
                    <th className="px-6  uppercase font-bold">
                      {item.soLuong}
                    </th>
                    <th className="px-6   font-bold">
                      {converCurences(item.donGiaSP)}đ
                    </th>
                    <th className="px-6   font-bold">
                      {converCurences(item.donGiaCuSP)}đ
                    </th>
                    <th className="">
                      <button
                        className=" bg-green-600 rounded-lg p-2 w-[50px] text-white  border border-green-400 hover hover:bg-green-400 transition-all"
                        onClick={() => {
                          navigate(`/Admin/adminproductdetails/${item._id}`);
                        }}
                      >
                        Xem
                      </button>

                      <button
                        className=" mx-1 bg-blue-600 rounded-lg p-2 w-[50px] text-white border  border-blue-400 hover hover:bg-blue-400 transition-all"
                        onClick={() => {
                          navigate(`/Admin/updateproductadmin/${item._id}`);
                        }}
                      >
                        Sửa
                      </button>

                      <button
                        className=" bg-red-600 rounded-lg p-2 w-[50px] text-white  border border-red-400 hover hover:bg-red-400 transition-all "
                        onClick={() => {}}
                      >
                        Xóa
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

export default ProductAdmin;
