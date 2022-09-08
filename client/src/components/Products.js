import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { converCurences } from "../config";
import { v4 as uuidv4 } from "uuid";
const Products = () => {
  const [searchData, setSearchData] = useOutletContext();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  // const [reload, setReload] = useState(false);
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   axios.post("/api/products", formData).then((response) => {
  //     setReload(!reload);
  //   });
  // };
  // console.log(searchData);
  return (
    <div className="">
      <div className="flex page-container items-center text-white justify-around  bg-slate-50  h-full py-2 font-semibold rounded-md cursor-pointer ">
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo.png"
          ></img>
        </a>
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/acer-512.png"
          ></img>
          .
        </a>
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/289381457_3090461431266968_444394360137680767_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5urmUS3KoDcAX8eDR7O&_nc_ht=scontent.fhan2-4.fna&oh=03_AVLUnV66yOxmNsdjAu7GX9AkL_ymYRqkOQTwugMhhQq4Iw&oe=6302FE55"
          ></img>
        </a>
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://cdn.iconscout.com/icon/free/png-256/msi-1-286075.png"
          ></img>
        </a>
        <a className="w-[120px] hover:scale-125 " href="">
          <img
            alt=""
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/292743536_579658443794451_9121069499877505171_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Agb6g9_sgkgAX8R0zRu&_nc_ht=scontent.fhan2-4.fna&oh=03_AVJ1kq6ReSQiYBicpp2EmnpSBw_TvEbw1HzZjYpzZoCIwg&oe=630356ED"
          ></img>
        </a>
      </div>

      <div className="grid grid-cols-5  page-container ">
        {data &&
          !searchData &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div
                key={item._id}
                className="text-blue-700 hover:shadow-2xl rounded-lg text-center border border-cyan-600 m-4 p-2 flex flex-col  group "
              >
                <img
                  src={`./images/${item.hinhanh}`}
                  alt=""
                  className=" justify-items-center w-700 object-cover rounded-lg-50 py-11 group-hover:-translate-y-2 ease-out duration-300"
                ></img>
                <div className="mt-auto">
                  <div>
                    <span> {item.tenSanPham} </span>
                    <span> {item.maLoaiSanPham} </span>
                    <br />
                    <span className="text-white text-lg bg-[#ff9300] font-semibold rounded-xl px-6 ">
                      {converCurences(item.donGiaSP)}đ
                    </span>
                  </div>
                  <div className="py-2 flex items-center gap-x-2 justify-center mt-auto">
                    <button
                      type="submit"
                      className="h-10 w-full font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900 transition-all"
                      onClick={() => {
                        navigate(`/sanpham/${item._id}`);
                      }}
                    >
                      Chi Tiết Sản Phẩm
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {searchData &&
          searchData.length > 0 &&
          searchData.map((item) => {
            return (
              <div
                key={uuidv4()}
                className="text-blue-700  rounded-lg text-center border border-cyan-600 m-4 p-2 flex flex-col  group "
              >
                <img
                  src={`./images/${item.hinhanh}`}
                  alt=""
                  className=" justify-items-center w-700 object-cover rounded-lg-50 py-11 group-hover:-translate-y-2 ease-out duration-300"
                ></img>
                <div className="mt-auto">
                  <div>
                    <span> {item.tenSanPham} </span>
                    <span> {item.maLoaiSanPham} </span>
                    <br />
                    <span className="text-white text-lg bg-[#ff9300] font-semibold rounded-xl px-6 ">
                      {converCurences(item.donGiaSP)}đ
                    </span>
                  </div>
                  <div className="py-2 flex items-center gap-x-2 justify-center mt-auto">
                    <button
                      type="submit"
                      className="h-10 w-full font-semibold rounded-md bg-cyan-600 text-white  hover:bg-cyan-900 transition-all"
                      onClick={() => {
                        navigate(`/sanpham/${item._id}`);
                      }}
                    >
                      Chi Tiết Sản Phẩm
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
