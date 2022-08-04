import React, { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import ProductAdmin from "./ProductAdmin";

const ProductDetailsAdmin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  const { handleSubmit, register } = useForm();

  const handleOnSubmit = (data) => {
    axios.post("/api/productDetails", data).then((data) => {
      console.log(data);
    });
  };
  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <select id="idSanPham" {...register("idSanPham")}>
          <option value="">Select a product</option>
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <option value={item._id} key={item._id}>
                  {item.tenSanPham}
                </option>
              );
            })}
        </select>

        <input
          type="text"
          name="mauSac"
          placeholder="Nhập Màu Sắc Sản Phẩm"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("mauSac")}
        />
        <input
          type="text"
          name="cpu"
          placeholder="Nhập Thông Số CPU"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("cpu")}
        />
        <input
          type="text"
          name="ram"
          placeholder="Nhập Thông Số RAM"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("ram")}
        />
        <input
          type="text"
          name="oCUng"
          placeholder="Nhập Thông Số Ổ Cứng"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("oCUng")}
        />
        <input
          type="text"
          name="cardDoHoa"
          placeholder="Nhập Thông Số Card Đồ Họa"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("cardDoHoa")}
        />
        <input
          type="text"
          name="manHinh"
          placeholder="Nhập Thông Số Màn Hình"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("manHinh")}
        />
        <input
          type="text"
          name="audio"
          placeholder="Nhập Thông Số Audio"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("audio")}
        />
        <input
          type="text"
          name="wedCam"
          placeholder="Nhập Thông Số WedCam"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("wedCam")}
        />
        <input
          type="text"
          name="pin"
          placeholder="Nhập Thông Số Pin"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("pin")}
        />
        <input
          type="text"
          name="kichThuoc"
          placeholder="Nhập Thông Số Kích Thước"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("kichThuoc")}
        />

        <input
          type="text"
          name="soLuong"
          placeholder="Nhập Số Lượng Sản Phẩm"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("soLuong")}
        />
        <input
          type="text"
          name="donGia"
          placeholder="Nhập Đơn Giá Sản Phẩm"
          className="py-3 px-12 border boder-gray-300 rounded-lg mx-2 my-2"
          {...register("donGia")}
        />

        <button
          type="submit"
          className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
        >
          Thêm Sản Phẩm
        </button>
      </form>
    </>
  );
};

export default ProductDetailsAdmin;
<ProductAdmin></ProductAdmin>;
