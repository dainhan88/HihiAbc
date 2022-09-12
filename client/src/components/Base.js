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
    <div className=" ">
      <div className="  bg-slate-200 p-3 h-50 w-100  font-[500]   ">
        <div className=" flex justify-between  page-container gap-x-10">
          <div className=" flex pt-4    gap-x-10">
            {/* home */}
            <NavLink className=" animate-bounce" to="../">
              <img
                className="h-50 hover:-translate-y-2  transition-all transform-gpu w-[100px] "
                src="https://by.com.vn/oCLMR"
              />
            </NavLink>

            {/* SanPham */}
            <div className="  hover:no-underline  text-[18px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-zinc-400 inline-block hover:no-underline font-bold text-red-600 px-2 rounded-lg"
                    : "hover:text-zinc-400 inline-block hover:no-underline font-bold text-[#3120E0] px-2 rounded-lg"
                }
                to="/sanpham"
              >
                Sản Phẩm
              </NavLink>
            </div>

            {/* Chính Sách */}
            <div className=" hover:no-underline text-[18px] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-zinc-400 inline-block hover:no-underline font-bold text-red-600 px-2 rounded-lg"
                    : "hover:text-zinc-400 inline-block hover:no-underline text-[#3120E0] px-2 rounded-lg font-bold"
                }
                to="/policy"
              >
                Chính Sách
              </NavLink>
            </div>

            {/* Bảo hành */}
            <div className="  hover:no-underline text-[18px] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-zinc-400 inline-block hover:no-underline font-bold text-red-600 px-2 rounded-lg"
                    : "hover:text-zinc-400 inline-block hover:no-underline text-[#3120E0] px-2 rounded-lg font-bold"
                }
                to="/insurance"
              >
                Yêu Cầu Bảo Hành
              </NavLink>
            </div>
            <div className="  hover:no-underline text-[18px] ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-zinc-400 inline-block hover:no-underline font-bold text-red-600 px-2 rounded-lg"
                    : "hover:text-zinc-400 inline-block hover:no-underline text-[#3120E0] px-2 rounded-lg font-bold"
                }
                to="/tra-cuu-don-hang"
              >
                Tra Cứu Đơn Hàng
              </NavLink>
            </div>
          </div>

          {/* search - góp ý & khiếu nại */}
          <div className="flex  gap-x-5 ">
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                placeholder="Nhập Tên Sản Phẩm ..."
                className="italic  pl-9 h-[50px] rounded-3xl w-[300px] my-2 text-black outline-none outline-offset-0	border border-cyan-900 focus:outline-blue-400"
                onChange={handleSearchChange}
              />
            </div>

            <div className="flex mt-4 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#3120E0"
                className="bi bi-emoji-wink"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z" />
              </svg>

              <a
                className="text-[#3120E0] font-bold  pl-2 hover:no-underline"
                href="https://bom.so/STloFg"
              >
                Góp ý<p>khiếu nại</p>
              </a>
            </div>
          </div>

          {/* cart icons */}
          <NavLink
            to="/cart"
            className="fixed shadow-2xl  text-[#fff] top-1/4 w-10 h-10 rounded-full hover:text-white hover:bg-red-500 bg-blue-500 flex items-center justify-center right-[50px] cursor-pointer"
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

          {/* các ứng dụng */}
          <div className="fixed top-[45%] left-[200px] rounded-full shadow-xl">
            <ul className="mb-0 ">
              {/* fb */}
              <li className=" border border-blue-600 rounded-full mb-2">
                <a href="https://www.facebook.com/profile.php?id=100006388833130">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="#277BC0"
                    className="p-1 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>

              {/* ytb */}
              <li className=" border border-[#C21010] rounded-full mb-2">
                <a href="https://www.youtube.com/channel/UCfhec7o1Gj3_-Bn5bpreO7A">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="#C21010"
                    className="p-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                </a>
              </li>

              {/* insta */}
              <li className=" border bg-gradient-to-r from-purple-500 to-pink-500 mb-2 rounded-full">
                <a href="https://www.instagram.com/nhaannn8888/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="#fff"
                    className="p-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>

              {/* tiktok */}
              <li className=" border border-black  rounded-full">
                <a href="https://www.tiktok.com/@dainhan8888">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="#000"
                    className="p-2 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Zalo-Link */}
          <NavLink
            to="/zalo-link"
            className="fixed rounded-lg bottom-[90px] w-14 h-10 shadow-2xl   flex items-center justify-center right-[50px] cursor-pointer  hover:scale-125"
          >
            <img src="https://laptop88.vn/template/giaodien_2022/images/zalo_sharelogo.png" />
          </NavLink>

          {/* link so dien thoai */}
          <div className="fixed uppercase w-[270px] bg-green-500 text-[30px]  rounded-t-md py-1 bottom-[2px] left-[10px]  rounded-sm flex items-center justify-center  cursor-pointer gap-x-5">
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
                className="text-[#fff] no-underline font-bold uppercase hover:no-underline hover:text-white"
              >
                0969.885.858{" "}
              </a>
            </div>
          </div>

          {/* messenger */}
          <div className="fixed  rounded-t-md pt-1 bottom-[2px] right-[10px] rounded-sm flex items-center justify-center  cursor-pointer gap-x-5">
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
        {/* footer */}
        {/* <footer className="bg-gray-600"> */}
        <footer className="bg-[#0F3460]">
          <div className=" text-white flex justify-between py-6 page-container text-sm gap-x-10">
            <div>
              <h4 className="text-lg">Thông Tin Công Ty</h4>
              <ul>
                <li className="mb-2">
                  Trụ sở : Số 14 ngõ 273 Đường Nguyễn Khoái, Phường Thanh Lương,
                  Quận Hai Bà Trưng, Thành Phố Hà Nội, Việt Nam
                  <br />
                  <a className="text-red-500" href="https://by.com.vn/LSR6p">
                    Xem chỉ đường
                  </a>
                </li>
                <li>Mã số thuế : 0107554071</li>
                <li>
                  Địa điểm Kinh doanh: Số 10 Ngõ 7 Phố Phương Liệt, Quận Thanh
                  Xuân, Thành phố Hà Nội.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg ">Liên Hệ</h4>
              <ul>
                <li className="mb-2">
                  Địa chỉ: Số 10 ngõ 7 Phố Phương Liệt, Phường Phương Liệt, Quận
                  Thanh Xuân, Hà Nội
                </li>
                <li className="mb-2">
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
            <div className="">
              <h4 className="text-lg w-[200px]">Hình Thức Vận Chuyển</h4>
              <ul>
                <li className=" flex gap-x-5 px-1 mt-3 mb-4">
                  <img src="https://hoanghamobile.com/Content/web/img/nhattin.jpg"></img>
                  <img src="https://hoanghamobile.com/Content/web/img/vnpost.jpg"></img>
                </li>

                <li>
                  <img src="https://hoanghamobile.com/Content/web/img/logo-bct.png"></img>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
