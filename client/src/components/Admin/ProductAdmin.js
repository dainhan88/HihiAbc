import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { converCurences } from "../../config";
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
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)} encType="multipart/form-data">
        <input
          type="text"
          name="tenSanPham"
          placeholder="Nhập Tên Sản Phẩm"
          onChange={(e) => {
            settenSanPham(e.target.value);
          }}
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
        />
        <input
          type="text"
          name="maLoaiSanPham"
          placeholder="Nhập Mã Loại Sản Phẩm"
          onChange={(e) => {
            setmaLoaiSanPham(e.target.value);
          }}
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
        />
        <input
          type="text"
          name="soLuong"
          placeholder="Nhập Số Lượng Sản Phẩm"
          onChange={(e) => {
            setsoLuong(e.target.value);
          }}
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
        />
        <input
          type="text"
          name="donGiaSP"
          placeholder="Nhập Đơn Giá Sản Phẩm"
          onChange={(e) => {
            setdonGiaSP(e.target.value);
          }}
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
        />
        <input type="file" name="hinhanh" onChange={handleSetFile} />
        <button
          type="submit"
          className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
        >
          Thêm Sản Phẩm
        </button>
      </form>

      <div className="grid grid-cols-3 page-container ">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div
                key={item._id}
                className="text-blue-700 text-center border border-cyan-600 m-4 p-2 flex flex-col  group "
              >
                <img
                  src={`./images/${item.hinhanh}`}
                  alt=""
                  className=" justify-items-center w-700 object-cover rounded-lg-50 py-11 group-hover:-translate-y-2 ease-out duration-300"
                ></img>
                <div className="flex flex-col mt-auto">
                  <div>
                    <span> {item.tenSanPham} </span>
                    <span> {item.maLoaiSanPham} </span>
                    <br />
                    <span className="text-white text-lg bg-[#ff9300] font-semibold rounded-xl px-6 ">
                      {" "}
                      {converCurences(item.donGiaSP)}đ{" "}
                    </span>
                  </div>
                  <div className="py-2 flex items-center gap-x-2 justify-center mt-auto">
                    <button
                      type="submit"
                      className="h-10 w-full font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900 transition-all"
                      onClick={() => {
                        navigate(`/sanpham/${item._id}`);
                      }}
                    >
                      Chi Tiết Sản Phẩm
                    </button>
                    <button
                      type="submit"
                      className="h-10 w-full font-semibold rounded-md bg-pink-600 text-white  hover:bg-red-900 transition-all"
                    >
                      Thêm Vào Giỏ Hàng
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductAdmin;
<Products></Products>;
