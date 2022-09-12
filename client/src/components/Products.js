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
        {/* Dell */}
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo.png"
          ></img>
        </a>

        {/* Acer */}
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/acer-512.png"
          ></img>
        </a>

        {/* HP */}
        <a className="w-[80px] hover:scale-125" href="">
          <img
            alt=""
            src="https://cdn.cdnlogo.com/logos/h/82/hp-2012.svg"
          ></img>
        </a>

        {/* MSI */}
        <a className="w-[120px] hover:scale-125" href="">
          <img
            alt=""
            src="https://cdn.iconscout.com/icon/free/png-256/msi-1-286075.png"
          ></img>
        </a>

        {/* Asus */}
        <a className="w-[135px] hover:scale-125 " href="">
          <img
            alt=""
            src="https://cutewallpaper.org/24/asus-logo-png/asus-04df8-logo-1c5ee-history-7f287-meaning-0e3cb-symbol-7822c-png.png"
          ></img>
        </a>
        {/* Apple */}
        <a className="w-[76px] hover:scale-125 " href="">
          <img
            alt=""
            src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/306112390_553079216508504_8815984489559416974_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6rFBQ35_x9IAX-etsbF&_nc_ht=scontent.fhan2-5.fna&oh=03_AVLr-CuV4N3kWM48Ccwt5EGBLLzGZamJ9U1Kmtir20cjSg&oe=63461BF0"
          ></img>
        </a>
      </div>

      <div className="grid grid-cols-5 cursor-pointer page-container ">
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
                    <span> {item.maLoaiSanPham} </span>
                    <span> {item.tenSanPham} </span>
                    <br />
                    <div className="flex justify-center gap-x-2">
                      <span className="text-black text-sm line-through rounded-xl ml-14">
                        {converCurences(item.donGiaCuSP)}đ
                      </span>
                      <p className="bg-red-500 w-auto font-bold border text-[10px] rounded-2xl px-3 text-white  ">
                        {Math.round(
                          ((item.donGiaSP - item.donGiaCuSP) /
                            item.donGiaCuSP) *
                            100
                        )}
                        %
                      </p>
                    </div>
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
