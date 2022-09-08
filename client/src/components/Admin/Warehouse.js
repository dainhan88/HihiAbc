import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { converCurences } from "../../config";
import { useCart } from "../../context/Cartcontext";
import { v4 as uuidv4 } from "uuid";

const Warehouse = () => {
  const { cartItems } = useCart();
  const [data, setData] = useState([]);
  const [detalsdata, setDetalsdata] = useState();
  const [dataSold, setDataSold] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const [reload, setReload] = useState(false);
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   axios.post("/api/products", formData).then((response) => {
  //     setReload(!reload);
  //   });
  // };
  useEffect(() => {
    axios.get("/api/productDetails/v2/getAllInfo").then((res) => {
      console.log(...res.data[0].mausac);
      setDetalsdata(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("/api/order/v1/getSold").then((res) => {
      setDataSold(res.data);
    });
  }, []);
  console.log(detalsdata);
  console.log(dataSold);
  return (
    <div className="px-36 py-10 mx-36">
      <div className="relative">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-[18px] text-orange-500 uppercase bg-gray-50 ">
            <tr>
              <th className="py-3 px-6">Sản Phẩm</th>
              <th className="py-3 px-6">Hãng</th>
              <th className="py-3 mx-6">Tổng Nhập</th>
              <th className="py-3 px-6">Đã Bán</th>
              <th className="py-3 px-6">Tồn Kho</th>
            </tr>
          </thead>
          <tbody className="text-[14px] ">
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return (
                  <React.Fragment key={uuidv4()}>
                    <tr className="border-t">
                      <th className="px-6 flex  uppercase font-bold">
                        <img
                          src={`../images/${item.hinhanh}`}
                          alt=""
                          className=" justify-items-center w-20 h-20 object-cover  group-hover:-translate-y-2 ease-out duration-300"
                        ></img>
                        <p className="py-9">{item.tenSanPham}</p>
                      </th>
                      <th className="px-6  uppercase font-bold">
                        {item.maLoaiSanPham}
                      </th>
                      <th className="px-6 text-center uppercase font-bold">
                        {item.soLuong}
                      </th>
                      <th className="text-center">
                        {dataSold &&
                          dataSold.length > 0 &&
                          dataSold.map((items) => {
                            if (item._id === items._id) {
                              return (
                                <span key={uuidv4()}>{items.soluong}</span>
                              );
                            }
                          })}
                      </th>
                      <th className="text-center">
                        {detalsdata &&
                          detalsdata.length > 0 &&
                          detalsdata.map((items) => {
                            if (item._id === items._id) {
                              return (
                                <span key={uuidv4()}>{items.soLuong}</span>
                              );
                            }
                          })}
                      </th>
                    </tr>
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Warehouse;
