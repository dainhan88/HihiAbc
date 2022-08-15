import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/Cartcontext";
const Base = ({ children }) => {
  const { calcQuantity } = useCart();
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
                  ? "hover:text-zinc-400 inline-block  text-red-600 px-2 rounded-lg"
                  : "hover:text-zinc-400 inline-block text-black px-2 rounded-lg"
              }
              to="/login"
            >
              ddawng nhaajp
            </NavLink>
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
            />
            <button className=" py-1 px-1 bg-cyan-600 text-white rounded-lg my-2 hover:bg-cyan-900 transition-all">
              Tìm Kiếm
            </button>
          </div>

          {/* cart icons */}
          <NavLink
            to="/cart"
            className="fixed  top-1/4 w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center right-[50px] cursor-pointer"
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
        </div>
      </div>
      <Outlet></Outlet>
      <div className="page-container flex justify-center px-4 my-14">
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
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="68"
              fill="currentColor"
              className="bi bi-award"
              viewBox="0 0 16 16"
            >
              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg> */}
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
                fill-rule="evenodd"
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
                  <a href="tel: 0969885858">Điện thoại:{""} 0969885858</a>
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
