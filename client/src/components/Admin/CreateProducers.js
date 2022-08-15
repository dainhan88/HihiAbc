import React, { useEffect, useState } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";

const CreateProducers = () => {
  const { handleSubmit, register } = useForm();

  const handleOnSubmit = (data) => {
    axios.post("/api/producers", data).then((data) => {
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
          <div className="flex  gap-x-44 ">
            <div>
              <div className="flex">
                <p className="w-56 my-5">Tên Nhà Sản Xuất :</p>
                <input
                  type="text"
                  name="tenNSX"
                  placeholder="Nhập Tên Nhà Sản Xuất"
                  className="py-3 w-[300px]  border boder-gray-300 rounded-lg px-12   my-2"
                  {...register("tenNSX")}
                  required
                />
              </div>

              <div className="flex">
                <p className="w-56 my-5">Link Website</p>
                <input
                  type="text"
                  name="websiteNSX"
                  placeholder="Nhập Link Website : "
                  className="py-3 w-[300px] border boder-gray-300 rounded-lg px-12   my-2"
                  {...register("websiteNSX")}
                />
              </div>
              <div className="flex">
                <p className="w-56 my-5">Địa Chỉ Nhà Sản Xuất:</p>
                <textarea
                  className=" border boder-gray-300 rounded-lg h-[300px] w-[300px]  "
                  type="text"
                  name="diaChiNSX"
                  placeholder="Nhập Địa Chỉ Nhà Sản Xuất"
                  {...register("diaChiNSX")}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="h-10 mt-10 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
          >
            Thêm Nhà Sản Xuất
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProducers;
