import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Abc = () => {
  const [dataDetail, setDataDetail] = useState();
  const { idSanPham } = useParams();
  useEffect(() => {
    axios.get(`/api/productDetails/detail/${idSanPham}`).then((res) => {
      setDataDetail(res.data);
    });
  }, [idSanPham]);
  return (
    <div>
      <div>
        <div className="">
          <script src="https://cdn.tailwindcss.com"></script>
          <link
            rel="stylesheet"
            href="https://cdn.tailgrids.com/tailgrids-fallback.css"
          />
          <script
            defer
            src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
          ></script>

          <section className="bg-white py-20 lg:py-[10px]">
            <div className="container">
              <div className=" flex justify-between w-[97%] m-auto">
                <div className=" text-center text-3xl mt-2">Kho Hàng</div>
                <form action="" className="relative mb-2">
                  <input
                    type="search"
                    className=" text-black peer cursor-pointer relative z-10 h-12 w-12 rounded-full border border-gray-800 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-gray-800 focus:pl-16 focus:pr-4"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-800 px-3.5 peer-focus:border-gray-800 peer-focus:stroke-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </form>
              </div>
              <div className=" ml-4 mb-3 my-auto  z-0">
                <div className="w-full px-4">
                  <div className="max-w-full overflow-x-auto overflow">
                    <table className="table-auto  w-full">
                      <thead>
                        <tr className="bg-[#3D8361]  text-center">
                          <th className=" border text-lg font-semibold text-white py-4   ">
                            Tên sản phẩm
                          </th>
                          <th className=" border text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                            Màu sắc
                          </th>
                          <th className=" border text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                            Dung lượng
                          </th>
                          <th className=" border text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4  ">
                            Số lượng
                          </th>
                          <th className=" border text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4  ">
                            Đơn Giá
                          </th>
                          <th className=" border text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4  ">
                            Đơn Giá Cũ
                          </th>
                          <th className=" border text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4  "></th>
                        </tr>
                      </thead>
                      {dataDetail &&
                        dataDetail.length > 0 &&
                        dataDetail.map((item) => {
                          return (
                            <tr
                              className="border-gray-300 hover:bg-gray-200 border text-center "
                              key={uuidv4()}
                            >
                              <th className=" border text-lg font-semibold text-black py-4   ">
                                {item.product.tenSanPham}
                              </th>
                              <th className=" border text-lg font-semibold text-black py-4   "></th>
                              <th className=" border text-lg font-semibold text-black py-4 lg:py-7 px-3 lg:px-4 "></th>
                              <th className=" border text-lg font-semibold text-black py-4 lg:py-7 px-3 lg:px-4 "></th>
                              <th className="  text-lg font-semibold text-black py-4 lg:py-7 px-3 lg:px-4  "></th>
                              <th className="  text-lg font-semibold text-black py-4 lg:py-7 px-3 lg:px-4  "></th>
                              <th>
                                <div className=" flex  justify-between border  text-dark font-medium text-base py-8 px-2 "></div>
                              </th>
                            </tr>
                          );
                        })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Abc;
