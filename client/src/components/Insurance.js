import axios from "axios";
import React, { useCallback, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import WarrantyClaim from "./WarrantyClaim";
import _debounce from "lodash/debounce";
import { v4 as uuidv4 } from "uuid";

const Insurance = () => {
  const [show, setShow] = useState();
  const [SearchData, setSearchData] = useState();
  const refSearch = useRef();
  const fetchDataWithSearch = (key) => {
    axios.get(`/api/warrantyclaim/search/query=${key}`).then((res) => {
      setSearchData(res.data);
    });
  };
  const debounceDropDown = useCallback(
    _debounce((nextValue) => fetchDataWithSearch(nextValue), 1000),
    []
  );
  const handleSearchChange = (e) => {
    if (refSearch.current?.value === "") {
      setSearchData("");
    }
    debounceDropDown(refSearch.current?.value);
  };
  return (
    <div className="page-container">
      <h1 className="text-center uppercase text-red-600 font-bold text-[35px] mt-10">
        *Tra Cứu Thông Tin Bảo Hành
      </h1>

      <div
        className=" underline hover:text-blue-600 cursor-pointer inline-block text-[30px] text-red-600 px-3"
        onClick={() => {
          setShow(true);
        }}
      >
        Gửi Yêu Cầu Bảo Hành
      </div>
      <div className="mt-20">
        <h2 className="font-bold text-[25px]">
          {" "}
          Tra cứu thông tin sản phẩm đang gửi bảo hành
        </h2>
        <p className="italic ml-9 text-[15px] mt-2">
          Quý khách vui lòng nhập đúng số điện thoại của quý khách đã đặt sản
          phẩm bên Công Ty. Nếu sai số điện thoại, hệ thống sẽ không thể tra cứu
          được thông tin của Quý Khách !
        </p>
        <div className="flex mt-5 justify-center">
          <input
            type="tel"
            maxLength={"10"}
            placeholder="Nhập Số Điện Thoại Của Quý Khách"
            className="border px-7 border-black rounded-xl w-[500px] h-[50px]"
            ref={refSearch}
          />

          <button
            className="flex gap-x-1 text-white hover:bg-cyan-900 transition-all rounded-lg text-[30px] bg-cyan-600 border mx-1 px-2"
            onClick={handleSearchChange}
          >
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="my-3"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </p>
            <p className="">Tra Cứu</p>
          </button>
        </div>
        {SearchData &&
          SearchData.length > 0 &&
          SearchData.map((item, index) => {
            return (
              <div>
                <p className=" mt-7 ml-80 font-bold text-[20px] ">
                  *Kết quả tìm được
                </p>
                <table className="w-[700px]  ml-80 text-sm text-left text-gray-500 ">
                  <thead className="text-[22px]  text-orange-500 uppercase bg-gray-50 ">
                    <tr>
                      <th className="py-3">Họ Tên</th>
                      <th className="">Số Điện Thoại</th>
                      <th className="">Email</th>
                      <th className="">Trạng Thái</th>
                    </tr>
                  </thead>

                  <tbody className="text-[18px]">
                    <th>
                      {SearchData &&
                        SearchData.length > 0 &&
                        SearchData.map((item, index) => {
                          return (
                            <div className="" key={uuidv4()}>
                              <span>{item.hoTenKhachYeuCau}</span>
                            </div>
                          );
                        })}
                    </th>
                    <th>
                      {SearchData &&
                        SearchData.length > 0 &&
                        SearchData.map((item, index) => {
                          return (
                            <div className="" key={uuidv4()}>
                              <span>{item.soDienThoatKhachYeuCau}</span>
                            </div>
                          );
                        })}
                    </th>
                    <th>
                      {SearchData &&
                        SearchData.length > 0 &&
                        SearchData.map((item, index) => {
                          return (
                            <div className="" key={uuidv4()}>
                              <span>{item.emailKhachYeuCau}</span>
                            </div>
                          );
                        })}
                    </th>
                    <th>
                      {SearchData &&
                        SearchData.length > 0 &&
                        SearchData.map((item, index) => {
                          return (
                            <div className="" key={uuidv4()}>
                              <span className="text-red-600 italic uppercase">
                                {item.tinhTrangXuLyYeuCau}
                              </span>
                            </div>
                          );
                        })}
                    </th>
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
      <div className="flex gap-x-24 border border-emerald-400 w-[600px] mx-80 p-3  mt-14">
        <div>
          <NavLink
            to="/policy"
            className="text-[#00cccc] hover:text-blue-600 hover:no-underline inline-block font-bold"
          >
            <p className="px-28">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="#00cccc"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
              </svg>
            </p>
            <p className="text-[30px] ">Chính Sách Bảo Hành</p>
          </NavLink>
        </div>
        <div className=" hover:text-blue-600 mt-2 inline-block font-bold">
          <p className="px-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="#00cccc"
              className="bi bi-telephone-outbound"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </p>
          <a
            className="text-[30px]  text-[#00cccc] hover:no-underline "
            href="tel:0969885858"
          >
            0969885858
          </a>
        </div>
      </div>
      {show && <WarrantyClaim setShow={setShow}></WarrantyClaim>}
    </div>
  );
};

export default Insurance;
