import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { converCurences } from "../../config";
import { v4 as uuidv4 } from "uuid";
// import ChartPriceByTime from "./ChartPriceByTime";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ChartPriceByTime, { dataui2 } from "./ChartPriceByTime";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const AdminDetailsProduct = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { sanphamid } = useParams();
  const [detalsdata, setDetalsdata] = useState();
  const [tenSanPham, settenSanPham] = useState();
  const [maLoaiSanPham, setmaLoaiSanPham] = useState();
  const [soLuong, setsoLuong] = useState();
  const [donGiaSP, setdonGiaSP] = useState();
  const [file, setFile] = useState();
  const [reload, setReload] = useState(false);
  const [showChart, SetShowChart] = useState(false);
  const [priceByTime, setPriceByTime] = useState();
  useEffect(() => {
    axios.get(`/api/products/getInfoProduct/${sanphamid}`).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/api/productDetails/${sanphamid}`).then((res) => {
      setDetalsdata(res.data);
    });
    axios.get(`/api/order/v2/getPriceByTime/id=${sanphamid}`).then((data) => {
      setPriceByTime(data.data);
    });
  }, []);

  // console.log(options);
  console.log("detalsdata", detalsdata);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tenSanPham", tenSanPham);
    formData.append("maLoaiSanPham", maLoaiSanPham);
    formData.append("soLuong", soLuong);
    formData.append("donGiaSP", donGiaSP);
    formData.append("hinhanh", file);
    axios.post("/api/products", formData).then((response) => {
      setReload(!reload);
    });
  };

  // const handleSetFile = (e) => {
  //   setFile(e.target.files[0]);
  // };
  const handleGetPriceByTime = (id) => {
    SetShowChart(true);
  };
  console.log(priceByTime);
  return (
    <div className="px-36">
      <div>
        <NavLink
          to="/admin/createdetailssanpham"
          type="submit"
          className=" flex w-[335px] transition-all h-10 my-5 py-2 mx-5 px-6 font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle-fill my-1"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
          <p className="px-2">Thêm Chi Tiết Cho Sản Phẩm Mới</p>
        </NavLink>
        <div className="text-[30px] font-bold text-center text-red-400 ">
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <React.Fragment key={uuidv4()}>
                  <div>
                    {data &&
                      data.length > 0 &&
                      data.map((items) => {
                        if (item._id === items._id) {
                          return (
                            <span key={uuidv4()}>
                              {items.maLoaiSanPham} {items.tenSanPham}
                            </span>
                          );
                        }
                      })}
                  </div>
                </React.Fragment>
              );
            })}
        </div>
        <button
          className="px-4 py-2 border-none bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition-all"
          onClick={() => {
            handleGetPriceByTime(detalsdata[0].idSanPham);
          }}
        >
          Xem
        </button>
        {/* <Line options={options} data={dataui} /> */}
        <div className="w-[50%] m-auto">
          {showChart && (
            <ChartPriceByTime
              options={options}
              data={dataui2(priceByTime)}
            ></ChartPriceByTime>
          )}
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-[18px] text-orange-500 uppercase bg-gray-50 ">
          <tr>
            <th className="py-3 px-1">Màu Trong Kho</th>
            <th className="py-3 px-1">Ram</th>
            <th className="py-3 px-1">Số Lượng </th>
            <th className="py-3 px-1">Đơn Giá </th>
            <th className="py-3 px-1">Đơn Giá Cũ</th>
          </tr>
        </thead>

        <tbody className="text-[14px] text-left  ">
          {detalsdata &&
            detalsdata.length > 0 &&
            detalsdata.map((item) => {
              return (
                <React.Fragment key={uuidv4()}>
                  <tr className="border-t">
                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return <span key={uuidv4()}>{items.mauSac}</span>;
                          }
                        })}
                    </th>
                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return <span key={uuidv4()}>{items.ram}</span>;
                          }
                        })}
                    </th>
                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return <span key={uuidv4()}>{items.soLuong}</span>;
                          }
                        })}
                    </th>
                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return <span key={uuidv4()}>{items.donGia}</span>;
                          }
                        })}
                    </th>

                    <th>
                      {detalsdata &&
                        detalsdata.length > 0 &&
                        detalsdata.map((items) => {
                          if (item._id === items._id) {
                            return <span key={uuidv4()}>{items.giaCu}</span>;
                          }
                        })}
                    </th>

                    <th className="">
                      <button
                        className=" mx-1 bg-blue-600 rounded-lg p-2 w-[50px] text-white border  border-blue-400 hover hover:bg-blue-400 transition-all"
                        onClick={() => {
                          navigate(`/admin/updatedetailssanpham/${item._id}`);
                        }}
                      >
                        Sửa
                      </button>
                    </th>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDetailsProduct;
