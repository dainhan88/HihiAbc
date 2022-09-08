import axios from "axios";
import React, { useCallback } from "react";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { useCart } from "../context/Cartcontext";
import _debounce from "lodash/debounce";
const Base = ({ children }) => {
  const { calcQuantity } = useCart();
  const [searchData, setSearchData] = React.useState("");
  const fetchDataWithSearch = (key) => {
    axios.get(`/api/products/v1/search?name=${key}`).then((res) => {
      setSearchData(res.data);
    });
  };
  const debounceDropDown = useCallback(
    _debounce((nextValue) => fetchDataWithSearch(nextValue), 1000),
    []
  );
  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setSearchData("");
    }
    debounceDropDown(e.target.value);
  };
  // console.log(searchData);
  return (
    <div className=" select-none">
      <div className="  bg-slate-200 p-3 h-50 w-100  font-[500]   ">
        <div className=" flex justify-between  text-white page-container gap-x-10">
          <div className=" flex py-3 gap-x-10">
            <NavLink className=" animate-bounce" to="../">
              <img
                className="h-50 hover:-translate-y-2  transition-all transform-gpu w-[100px] "
                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/293791365_649899559426320_6480368660795726920_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SOmawXs48fUAX_fTzWQ&_nc_ht=scontent.fhan15-1.fna&oh=03_AVIwKctyqMjtIFdfoI5msPUdoQpI59HrFZxDrcobz-XdIg&oe=631B9E8B"
              />
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block text-cyan-600 px-2 rounded-lg "
                  : "hover:text-zinc-400 inline-block text-white px-2 rounded-lg"
              }
              to="/"
            >
              Trang Chủ
            </NavLink> */}
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-zinc-400 inline-block  text-red-600 px-2 rounded-lg"
                    : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
                }
                to="/sanpham"
              >
                Sản Phẩm
              </NavLink>
            </div>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block text-red-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
              }
              to="/policy"
            >
              Chính Sách
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "hover:text-zinc-400 inline-block text-red-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
              }
              to="/insurance"
            >
              Yêu Cầu & Tra Cứu Bảo Hành
            </NavLink>
          </div>
          <div className="flex  gap-x-5">
            <input
              placeholder="Search... "
              className=" px-3 rounded-lg w-[300px] my-2 text-black outline-none outline-offset-0	border border-cyan-900 focus:outline-blue-400"
              onChange={handleSearchChange}
            />
            <button className=" py-1 px-1 bg-cyan-600 text-white rounded-lg my-2 hover:bg-cyan-900 transition-all">
              Tìm Kiếm
            </button>
          </div>

          {/* cart icons */}
          <NavLink
            to="/cart"
            className="fixed shadow-2xl  text-[#fff] top-1/4 w-10 h-10 rounded-full hover:text-white hover:bg-red-500 bg-slate-400 flex items-center justify-center right-[50px] cursor-pointer"
          >
            <span className="  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span className="absolute animate-bounce -top-[10px] -right-[10px] bg-red-500 border border-gray-300 rounded-full w-[25px] h-[25px] flex items-center justify-center">
              {calcQuantity() || 0}
            </span>
          </NavLink>

          {/* Zalo-Link */}
          <NavLink
            to="/zalo-link"
            className="fixed rounded-lg top-3/4 w-14 h-10 shadow-2xl  bg-white flex items-center justify-center right-[50px] cursor-pointer  hover:scale-125"
          >
            <img src="https://laptop88.vn/template/giaodien_2022/images/zalo_sharelogo.png" />
          </NavLink>
          <div className="fixed uppercase bg-green-500 text-[30px] px-3 rounded-t-md py-1 bottom-[2px] left-[10px]  rounded-sm flex items-center justify-center  cursor-pointer gap-x-5">
            <div className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#00e600"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00e600"
                className="w-7 h-7 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
            </div>
            <div>
              <a
                href="tel:0969885858"
                className="text-[#fff] no-underline hover:no-underline hover:text-white"
              >
                0969.885.858{" "}
              </a>
            </div>
          </div>
          <div className="fixed px-3 rounded-t-md pt-1 bottom-[2px] right-[10px] rounded-sm flex items-center justify-center  cursor-pointer gap-x-5">
            <div>
              <a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100006388833130">
                <img
                  src="https://laptop88.vn/template/giaodien_2022/images/messenger-chat.png"
                  href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100006388833130"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={[searchData, setSearchData]}></Outlet>

      <div className="page-container  flex justify-center px-4 my-14">
        <div className="page-container  flex gap-x-3 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              fill="#00cccc"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </span>
          <div className="my-3">
            <span>Sản Phẩm</span>
            <br />
            <strong className="uppercase">chính hãng</strong>
          </div>
        </div>
        <div className="page-container flex gap-x-3 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              fill="#00cccc"
              className="bi bi-box-seam-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"
              />
            </svg>
          </span>
          <div className=" my-3 ">
            <span>Vận Chuyển</span>
            <br />
            <strong className="uppercase">nhanh - an toàn </strong>
          </div>
        </div>
        <div className="page-container flex gap-x-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              fill="#00cccc"
              className="bi bi-headset"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
            </svg>
          </span>
          <div className="my-3">
            <span>Hotline Hỗ Trợ</span>
            <br />
            <a href="tel:0969885858" className="uppercase text-blue-600">
              0969885858{" "}
            </a>
          </div>
        </div>
        <div className="page-container flex gap-x-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              fill="#00cccc"
              className="bi bi-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
            </svg>
          </span>
          <div className="my-3">
            <span>Hỗ Trợ</span>
            <br />
            <strong className="uppercase ">bảo hành của hãng </strong>
          </div>
        </div>
      </div>
      <div>
        <footer className="bg-gray-600">
          <div className=" text-white flex justify-around py-6 page-container text-sm gap-x-10">
            <div>
              <h4 className="text-lg">Thông Tin Công Ty</h4>
              <ul>
                <li>
                  Trụ sở : Số 14 ngõ 273 Đường Nguyễn Khoái, Phường Thanh Lương,
                  Quận Hai Bà Trưng, Thành Phố Hà Nội, Việt Nam
                </li>
                <li>Mã số thuế : 0107554071</li>
                <li>
                  Địa điểm Kinh doanh: Số 10 Ngõ 7 Phố Phương Liệt, Quận Thanh
                  Xuân, Thành phố Hà Nội.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg">Liên Hệ</h4>
              <ul>
                <li>
                  Địa chỉ: Số 10 ngõ 7 Phố Phương Liệt, Phường Phương Liệt, Quận
                  Thanh Xuân, Hà Nội
                </li>
                <li>
                  <a
                    className="text-[#fff] hover:text-[#fff] hover:no-underline"
                    href="tel: 0969885858"
                  >
                    Điện thoại:{""} 0969885858
                  </a>
                </li>
                <li>Email: CongtyAntech@gmail.com</li>
              </ul>
            </div>
            {/* <div>
              <a href="" className="text-lg">
                Chính Sách Bảo Hành
              </a>
            </div> */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
