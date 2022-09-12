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
          <div className="pt-2 pb-4  flex items-center">
            <div className="   w-[70%]  text-black items-center ">
              <div key={data._id} className=" m-4 p-2 group ">
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
              <span className="italic text-[17px] ml-4 border-l ">
                {" "}
                Giá đã bao gồm 10% VAT
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
              <p className="text-[16px]">
                Tặng kèm chuột, balo cao cấp Bảo hành dài lâu, máy chất lượng
                như mới
              </p>
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
              <div className="m-10 mb-0">
                <img src="https://laptop88.vn/template/giaodien_2022/images/banner-right-detail.png"></img>
              </div>
            </div>
          </div>
        )}
        <div className="flex mt-5 justify-between">
          <div className="w-[70%] ml-1 mr-5">
            <div className="border border-gray-900 ml-3 shadow-lg rounded-lg p-2 ">
              <ul className=" font-bold border text-pink-600 border-spacing-11 m-4 p-2 rounded-sm group text-center">
                Thông Số Kỹ Thuật
              </ul>
              <table>
                <tbody className="text-sm ">
                  <tr>
                    <td className="py-4">
                      <strong>CPU :</strong>
                    </td>
                    <td>
                      <div className="pl-2 ">
                        <span className=" rounded-md font-bold  px-4 mx-2  ">
                          {data.cpu}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4">
                      <strong>Ổ Cứng:</strong>
                    </td>
                    <td>
                      <div className="pl-2 ">
                        <span className=" rounded-md font-bold  px-4 mx-2  ">
                          {data.oCUng}
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 ">
                      <strong>Card Đồ Họa:</strong>
                    </td>
                    <td>
                      <div className="px-2 ">
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
                      <div className="pl-2">
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
          <div className="bg-[#fff] shadow-xl w-[40%] h-[470px] p-5 border border-double  rounded-xl">
            <h4 className="font-bold text-pink-600 text-[25px]">
              - Thông Tin Khuyến Mại:
            </h4>
            <ul className="text-[15px]">
              <li className="mt-2">
                + Tặng KHÁCH HÀNG ĐƯỢC CHỌN 1 TRONG 2 OPTION KHUYẾN MẠI:
              </li>
              <li className="mt-2">
                + Tặng TAI NGHE HP OMEN 800 1KF76AA Mới trị giá 299.000đ
              </li>
              <li className="mt-2">
                + Tặng BÌNH NƯỚC THỂ THAO Laptop88 trị giá 59.000đ
              </li>
              <li className="mt-2">
                + Tặng Balo laptop chống sốc hoặc Túi xách AnTech Việt Nam trị
                giá 295.000 đ
              </li>
              <li className="mt-2">
                + Tặng CHUỘT KHÔNG DÂY CÓ PIN SẠC trị giá 159.000 đ
              </li>
              <li className="mt-2">
                + TẶNG BÀN DI CHUỘT GAMING XXL KHỔ LỚN 80 X 30 cm
              </li>
              <li className="mt-2">
                Tặng Miễn phí dán Skin mặt lưng Laptop trị giá 180.000đ
              </li>
            </ul>
            <h4 className="font-bold mt-2 text-blue-600 text-[25px]">
              (*)Tặng Hệ điều hành Windows Bản Quyền theo máy
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsClient;
