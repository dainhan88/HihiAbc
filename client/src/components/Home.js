import axios from "axios";
import React, { useEffect, useState } from "react";

import Products from "./Products";

const Home = () => {
  return (
    <div className=" ">
      {/* <div className="flex gap-x-16 justify-center page-container text-black py-4 page-container">
        <ul className="cursor-pointer  bg-purple-500 px-4 py-2 rounded-2xl hover:text-white hover:bg-red-500 transition-all">
          <div to="Admin/Demand/demandoffice">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="66"
              fill="currentColor"
              className="bi  bi-briefcase-fill mx-6 hover:text-white"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
            </svg>
          </div>
          <p className="text-white ">LapTop Văn Phòng</p>
        </ul>
        <ul className="cursor-pointer bg-orange-500 px-4 py-2 rounded-2xl hover:text-white hover:bg-red-500 transition-all">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            fill="currentColor"
            className="bi bi-controller mx-4"
            viewBox="0 0 16 16"
          >
            <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
            <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
          </svg>
          <p className="text-white">LapTop Gaming</p>
        </ul>
        <ul className="cursor-pointer bg-lime-500 px-4 py-2 rounded-2xl hover:text-white hover:bg-red-500 transition-all">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            fill="currentColor"
            className="bi bi-stack mx-4"
            viewBox="0 0 16 16"
          >
            <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
            <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
          </svg>
          <p className="text-white">LapTop Đồ Họa</p>
        </ul>
        <ul className="cursor-pointer bg-cyan-500 px-4 py-2 rounded-2xl hover:text-white hover:bg-red-500 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            fill="currentColor"
            className="bi bi-laptop-fill mx-6"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          <p className="text-white">LapTop Mỏng Nhẹ</p>
        </ul>{" "}
      </div> */}
      <div>
        <img
          className="page-container h-[500px]"
          src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.15752-9/296933574_722559408842451_3881068964436356745_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SQcigM3isl4AX9Pll3w&_nc_ht=scontent.fhan14-2.fna&oh=03_AVL0GpeQc-g-oc4h2o7tNt9kSpQXcd98D2ILXN6t2V77Sw&oe=6318264E"
        ></img>
      </div>
      {/* <Products></Products>
      <div className=" flex justify-center gap-x-6  text-white text-[20px]">
        <p className="rounded-full w-8 h-8 text-center bg-orange-400">1</p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 cursor-pointer  hover:bg-white hover:text-red-500">
          2
        </p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 hover:bg-white hover:text-red-500">
          3
        </p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 cursor-pointer  hover:bg-white hover:text-red-500">
          4
        </p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 cursor-pointer  hover:bg-white hover:text-red-500">
          5
        </p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 cursor-pointer  hover:bg-white hover:text-red-500">
          6
        </p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 cursor-pointer  hover:bg-white hover:text-red-500">
          7
        </p>
        <p className="rounded-full w-8 h-8 text-center bg-zinc-600 flex  cursor-pointer  hover:bg-white hover:text-red-500  justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-square my-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </p>
      </div> */}

      <div className="bg-white py-6">
        <div className="xl:container  mx-auto px-3 sm:px-4 xl:px-2">
          {/* <!-- big grid 1 --> */}
          <div className="flex flex-row  flex-wrap">
            {/* <!--Start left cover--> */}
            {/* <!--Start box news--> */}
            <div className="flex-shrink max-w-full w-full h-[500px] lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div className="relative hover-img max-h-98 overflow-hidden">
                <a href="#">
                  <img
                    className="max-w-full w-full mx-auto h-auto"
                    src="https://tailnews.tailwindtemplate.net/src/img/dummy/img1.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href="#">
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">
                      Hãy làm quen với 9330 mới, tính năng 2 trong 1 siêu cao
                      cấp 13 inch đầu tiên của Latitude
                    </h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">
                    Hãy thử và cảm nhận
                  </p>
                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                      DELL
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full h-[500px] lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
              <div className="relative hover-img max-h-98 overflow-hidden">
                <a href="#">
                  <img
                    className="max-w-full w-full mx-auto h-auto"
                    src="https://tailnews.tailwindtemplate.net/src/img/dummy/img1.jpg"
                    alt="Image description"
                  />
                </a>
                <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                  <a href="#">
                    <h2 className="text-3xl font-bold capitalize text-white mb-3">
                      Cảm nhận sự khác biệt Trải nghiệm Máy tính xách tay chơi
                      game G16 mới với màn hình 16 inch
                    </h2>
                  </a>
                  <p className="text-gray-100 hidden sm:inline-block">
                    Hãy thử và cảm nhận
                  </p>
                  <div className="pt-2">
                    <div className="text-gray-100">
                      <div className="inline-block h-3 border-l-2 border-red-600 mr-2"></div>
                      ACER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-pl-6 snap-x flex ...">
        <div className="snap-start ...">
          <img src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-start ...">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-start ...">
          <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-start ...">
          <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-start ...">
          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div>
    </div>
  );
};

export default Home;
