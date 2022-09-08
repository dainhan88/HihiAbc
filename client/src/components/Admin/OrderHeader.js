import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const OrderHeader = () => {
  const [dataOrder, setDataOrder] = useState();
  const [stateOrder, setStateOrder] = useState();
  const [loading, setLoading] = useState(true);
  const STATE = "Chờ xác nhận";
  useEffect(() => {
    axios.get(`/api/order/getOrderByState/${STATE}`).then((res) => {
      setDataOrder(res.data);
    });
  }, [loading]);

  return (
    <div>
      <h1 className="font-bold  leading-6 text-red-600 text-center py-10 uppercase text-[25px]">
        Quản Lý Đơn Hàng
      </h1>
      <div className="flex gap-x-[500px]">
        <div className=" flex gap-x-10 py-3 ">
          <NavLink
            to="./orders"
            className={({ isActive }) =>
              isActive
                ? "hover:text-zinc-400 inline-block text-white bg-red-600 px-2 rounded-lg"
                : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
            }
          >
            Tất Cả Đơn Hàng
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-zinc-400 inline-block text-white bg-red-600 px-2 rounded-lg"
                : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
            }
            to="./orderwait"
          >
            <p className="relative">
              Đang Chờ Xử Lý
              <div className="absolute animate-bounce  top-[-15px] right-[-20px] w-6 h-6 text-center text-white bg-red-600 rounded-full">
                {dataOrder?.length}
              </div>
            </p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-zinc-400 inline-block text-white bg-red-600 px-2 rounded-lg"
                : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
            }
            to="./orderdelivering"
          >
            Đơn Hàng Đang Giao
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "hover:text-zinc-400 inline-block text-white bg-red-600 px-2 rounded-lg"
                : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
            }
            to="./orderdelivered"
          >
            Đơn Hàng Đã Giao
          </NavLink>
        </div>
        <div className="flex gap-x-5">
          <input
            placeholder="Search..."
            className=" px-5 rounded-lg w-[300px] my-2 text-black outline-none outline-offset-0	border border-cyan-900 focus:outline-blue-400"
          />
          <button className=" py-1 px-1  bg-cyan-600 text-white rounded-lg my-2 hover:bg-cyan-900">
            Tìm Kiếm
          </button>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default OrderHeader;
