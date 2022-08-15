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
      <div className=" flex justify-center page-container my-9">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="text-center bg-slate-400 text-[17px] mb-10 font-bold text-red-400 ">
            <select id="idSanPham" {...register("idSanPham")}>
              <option value="">Chọn Sản Phẩm Cần Nhập Thông Tin</option>
              {data &&
                data.length > 0 &&
                data.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.maLoaiSanPham} {item.tenSanPham}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex  gap-x-44 ">
            <div>
              <div className="flex">
                <p className="w-36 my-5">Thêm Màu Sắc :</p>
                <input
                  type="text"
                  name="mauSac"
                  placeholder="Nhập Màu Sắc Sản Phẩm"
                  className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                  {...register("mauSac")}
                  required
                />
              </div>

              <div className="flex">
                <p className="w-36 my-5">Thông Số Ram :</p>
                <input
                  type="text"
                  name="ram"
                  placeholder="Nhập Thông Số RAM"
                  className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                  {...register("ram")}
                  required
                />
              </div>

              <div className="flex">
                <p className="w-36 my-5">Số Lượng :</p>
                <input
                  type="text"
                  name="soLuong"
                  placeholder="Nhập Số Lượng Sản Phẩm"
                  className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                  {...register("soLuong")}
                />
              </div>
              <div>
                <div className="flex">
                  <p className="w-36 my-5">Đơn Giá :</p>
                  <input
                    type="text"
                    name="donGia"
                    placeholder="Nhập Đơn Giá Sản Phẩm"
                    className="py-3  border boder-gray-300 rounded-lg px-12   my-2"
                    {...register("donGia")}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="h-10 mt-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
          >
            Thêm Chi Tiết Sản Phẩm
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductDetailsAdmin;
<ProductAdmin></ProductAdmin>;
