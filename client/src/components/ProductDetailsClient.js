import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { converCurences } from "../config";
import { useCart } from "../context/Cartcontext";

const ProductsDetailsClient = () => {
  const [data, setData] = useState([]);
  const [detalsdata, setDetalsdata] = useState();
  const [indexRam, setIndexRam] = useState(0);
  const [indexColor, setIndexColor] = useState(0);
  const { sanphamid } = useParams();
  const { addToCart, calcQuantity } = useCart();
  // const { idSanPham } = useParams();
  // console.log(productId);

  useEffect(() => {
    axios.get(`/api/products/getInfoProduct/${sanphamid}`).then((res) => {
      setData(res.data[0]);
    });
  }, [sanphamid]);

  useEffect(() => {
    axios
      .get(`/api/productDetails/infoProductDetails/${sanphamid}`)
      .then((res) => {
        setDetalsdata(res.data[0]);
      });
  }, [sanphamid]);

  const handleAddtoCart = async (detalsdata) => {
    const data1 = {
      ...data,
      ...detalsdata,
      mausac: detalsdata?.mausac[indexColor],
      ram: detalsdata?.ram[indexRam],
      gia: detalsdata?.gia[indexRam],
      giaCu: detalsdata?.giaCu[indexRam],
      quantity: 1,
    };
    const quantity = await axios.get(
      `/api/productDetails/checkQuantityProduct/proID=${data1._id}&mausac=${data1.mausac}`
    );
    if (data1.quantity <= quantity.data) {
      addToCart(data1);
      return;
    }
    alert("Sản phẩm đã hết hàng");
  };
  console.log(detalsdata);
  return (
    <div>
      <div className=" page-container ">
        <div>
          <div className=" text-red-600 flex justify-center font-bold text-[20px] my-8 px-20">
            <span className="mr-2"> {data.maLoaiSanPham} </span>
            <span> {data.tenSanPham} </span>
            <br />
          </div>
        </div>
        {data && (
          <div className="py-6  flex items-center">
            <div className="   w-[70%]  text-black items-center ">
              <div key={data._id} className="  m-4 p-2 group ">
                <img
                  src={`../images/${data.hinhanh}`}
                  alt=""
                  className=" justify-items-center  border border-cyan-600 rounded-3xl object-cover justify-center  group-hover:-anslate-y-2 ease-out duration-300"
                ></img>
              </div>
            </div>
            <div className="w-[40%]">
              <span className="text-red-400 font-semibold text-xl">
                Giá: {converCurences(detalsdata && detalsdata?.gia[indexRam])}đ
              </span>
              <span className="text-lg font-semibold text-[#7A86B6] line-through ml-3">
                {converCurences(detalsdata && detalsdata?.giaCu[indexRam])}đ
              </span>
              <div className="px-10">
                <div className="px-2 mb-5">
                  <span className="px-10">Màu:</span>
                  {detalsdata &&
                    detalsdata.mausac.map((item, i) => {
                      if (
                        item !== '""' &&
                        item !== undefined &&
                        item !== null &&
                        item !== ""
                      ) {
                        return (
                          <span
                            className={`bg-slate-100 border border-sky-800 rounded-md font-bold  px-2 mx-2 cursor-pointer hover:bg-stone-700 ansition-all capitalize ${
                              indexColor === i
                                ? "border-2 border-yellow-400"
                                : "border border-sky-800"
                            }`}
                            onClick={() => {
                              setIndexColor(i);
                            }}
                            key={uuidv4()}
                          >
                            {item}
                          </span>
                        );
                      }
                    })}
                </div>
                <div className="px-2">
                  <span className="px-10">RAM:</span>
                  {detalsdata &&
                    detalsdata.ram.map((item, i) => {
                      return (
                        <span
                          className={` bg-slate-100   rounded-md font-bold  px-4 mx-2 cursor-pointer  hover:bg-stone-700 ansition-all capitalize ${
                            i === indexRam
                              ? "border-2 border-yellow-400"
                              : "border border-sky-800"
                          }`}
                          onClick={() => {
                            setIndexRam(i);
                          }}
                          key={uuidv4()}
                        >
                          {item}
                        </span>
                      );
                    })}
                </div>
              </div>
              <br />
              Tặng kèm chuột, balo cao cấp Bảo hành dài lâu, máy chất lượng như
              mới
              <br />
              <li>
                ✅Bảo hành theo chính sách của nhà sản xuất -{" "}
                <NavLink href="" to="/warrantypolicy" className="text-blue-600">
                  Xem chính sách
                </NavLink>
              </li>
              <li>✅ MIỄN PHÍ GIAO HÀNG TẬN NHÀ</li>
              <li>
                Với đơn hàng {"<"} 4.000.000 đồng: Miễn phí giao hàng cho đơn
                hàng {"<"} 5km tính từ cửa hàng AnTech Việt Nam
              </li>{" "}
              <li>
                Với đơn hàng {">"} 4.000.000 đồng: Miễn phí giao hàng (khách
                hàng chịu phí bảo hiểm hàng hóa nếu có)
              </li>
              <br />
              <p>
                Hotline tư vấn:{" "}
                <a className="text-red-600" href="tel:0969885858">
                  0969885858
                </a>
              </p>
              <br />
              <button
                type="button"
                className="px-4 py-2 font-semibold rounded-md bg-pink-600 text-white w-full hover:bg-red-900 ansition-all"
                onClick={() => {
                  console.log(detalsdata);
                  handleAddtoCart(detalsdata);
                }}
              >
                Thêm Vào Giỏ Hàng
              </button>
            </div>
          </div>
        )}
        <div className="flex">
          <div className=" border border-cyan-600 m-4 p-2 group w-[75%]  ">
            <div>
              <ul className=" font-bold border text-blue-700 border-spacing-11 m-4 p-2 rounded-sm group text-center">
                Khách Hàng Khai Báo Thông Tin Mua Hàng
              </ul>
            </div>
            <div>
              <div className="text-black">
                <span>Thông Tin Người Mua</span>
                <br />
                <span className="text-[12px] text-red-500  font-bold">
                  {" "}
                  Những phần đánh dấu (*) là bắt buộc
                </span>
              </div>
              <div className="border border-spacing-2 m-4 p-2  ">
                <>
                  Họ Tên*
                  <div>
                    <input
                      type="text"
                      name=""
                      placeholder="Nhập Họ Tên"
                      className="py-3 px-12 border boder-gray-300 rounded-lg  my-2 w-[100%] "
                    />
                  </div>
                </>
                <>
                  Số Điện Thoại*
                  <div>
                    <input
                      type="text"
                      name=""
                      placeholder="Nhập Số Điện Thoại"
                      className="py-3 px-12 border boder-gray-300 rounded-lg w-[100%] my-2"
                    />
                  </div>
                </>
                <>
                  Địa Chỉ*
                  <div>
                    <input
                      type="text"
                      name=""
                      placeholder="Nhập Địa Chỉ Nhận Hàng"
                      className="py-3 px-12 border boder-gray-300 rounded-lg w-[100%] my-2"
                    />
                  </div>
                </>
                <>
                  Email
                  <div>
                    <input
                      type="text"
                      name=""
                      placeholder="Nhập Địa Chỉ Email"
                      className="py-3 px-12 border boder-gray-300 rounded-lg w-[100%] my-2"
                    />
                  </div>
                </>
              </div>

              <div className="">
                <>
                  <div>
                    <ul>Ghi Chú Khách Hàng</ul>
                    <textarea
                      type="textarea"
                      className="border border-black rounded-lg w-[100%] h-[100px] px-[5px]"
                    />
                  </div>
                </>
              </div>
            </div>
            <br />
            <div className="flex  gap-x-10 font-bold text-2xl">
              <button
                type="submit"
                className="px-4 py-2 w-full font-bold text-2xl rounded-md bg-blue-600 text-white  hover:bg-red-900 ansition-all"
              >
                MUA NGAY
              </button>
            </div>
          </div>
          <div className="w-[45%]">
            <div className="border border-gray-900 m-4 p-2 ">
              <ul className=" font-bold border text-blue-700 border-spacing-11 m-4 p-2 rounded-sm group text-center">
                Thông Số Kỹ Thuật
              </ul>
              <table>
                <tbody className="text-sm ">
                  <tr>
                    <td className="py-4">
                      <strong>Ổ Cứng:</strong>
                    </td>
                    <td>
                      <div className="px-2 ">
                        <span className=" rounded-md font-bold  px-4 mx-2  ">
                          {data.oCUng}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>Card Đồ Họa:</strong>
                    </td>
                    <td>
                      <div className="px-2">
                        <span
                          className=" rounded-md font-bold  px-4 mx-2  "
                          key={uuidv4()}
                        >
                          {data.cardDoHoa}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>Màn Hình:</strong>
                    </td>
                    <td>
                      <div className="px-2">
                        <span
                          className=" rounded-md font-bold  px-4 mx-2  "
                          key={uuidv4()}
                        >
                          {data.manHinh}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>Audio:</strong>
                    </td>
                    <td>
                      <div className="px-2">
                        <span
                          className=" rounded-md font-bold  px-4 mx-2  "
                          key={uuidv4()}
                        >
                          {data.audio}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>wedCam:</strong>
                    </td>
                    <td>
                      <div className="px-2">
                        <span
                          className=" rounded-md font-bold  px-4 mx-2  "
                          key={uuidv4()}
                        >
                          {data.wedCam}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>Pin:</strong>
                    </td>
                    <td>
                      <div className="px-2">
                        <span
                          className=" rounded-md font-bold  px-4 mx-2  "
                          key={uuidv4()}
                        >
                          {data.pin}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>Kích Thước:</strong>
                    </td>
                    <td>
                      <div className="px-2">
                        <span
                          className=" rounded-md font-bold  px-4 mx-2  "
                          key={uuidv4()}
                        >
                          {data.kichThuoc}
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsClient;
