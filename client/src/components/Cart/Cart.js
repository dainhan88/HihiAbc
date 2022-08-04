import React from "react";
import { useCart } from "../../context/Cartcontext";
import { v4 as uuidv4 } from "uuid";
import { converCurences } from "../../config";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, removeToCart } = useCart();

  return (
    <div>
      <div>
        <h1 className="text-center py-4 font-bold text-[30px] text-red-500">
          Giỏ Hàng
        </h1>
      </div>
      <div className="page-container flex gap-x-10">
        <div className=" w-[65%] ">
          {cartItems &&
            cartItems.length > 0 &&
            cartItems.map((item) => {
              return (
                <div
                  className="flex border rounded-2xl w-[100%] justify-center mx-auto mb-5 "
                  key={uuidv4()}
                >
                  <div className=" w-[40%]">
                    <img src={`../images/${item.hinhanh}`} alt="Error"></img>
                  </div>
                  <div className=" px-9">
                    <span className="text-red-500 font-bold text-[20px]">
                      {item.maLoaiSanPham} {item.tenSanPham}
                    </span>
                    <div className="flex">
                      <p className="text-red-500 font-bold ">
                        {converCurences(item.gia)}đ
                      </p>
                      <p className="px-5 line-through opacity-60">35000000đ</p>
                      <p className="bg-red-500 font-bold border rounded-2xl px-3 text-white ">
                        Giảm 30%
                      </p>
                    </div>
                    <p className="text-black font-semibold capitalize ">
                      {item.mausac} , {item.ram}
                    </p>
                    <div className="flex">
                      Chọn Số Lượng{" "}
                      <div className=" mx-2 border border-solid w-16 text-center">
                        <span className="cursor-pointer px-1.5"> - </span>{" "}
                        {item.quantity}
                        <span className="cursor-pointer px-1.5"> + </span>
                      </div>
                      <p
                        className="mx-7 cursor-pointer text-black font-semibold hover:text-red-600"
                        onClick={() => {
                          removeToCart(item._id, item.ram, item.color);
                        }}
                      >
                        Xóa
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className=" flex px-44 justify-between  text-[17px]">
            Tổng Tiền Tạm Tính:
            <div className="text-red-500 px-10 font-bold ">
              {converCurences(totalPrice())}đ
            </div>
          </div>
          <div className="flex flex-col mt-auto mx-5">
            <div className="py-2 flex items-center gap-x-2 justify-center mt-auto">
              <NavLink
                type="submit"
                className="h-10 w-full font-semibold rounded-md bg-cyan-600 text-white text-center  py-2 hover:bg-cyan-900 transition-all"
                to="/ProceedToOrder"
              >
                TIẾN HÀNH MUA HÀNG
              </NavLink>
              <NavLink
                type="submit"
                className="h-10 w-full font-semibold rounded-md bg-pink-600 text-white text-center py-2 hover:bg-red-900 transition-all "
                to="/sanpham"
              >
                MUA THÊM SẢN PHẨM KHÁC
              </NavLink>
            </div>
          </div>
        </div>
        {}
        <div className="bg-[#f6f6f6] h-96 p-5 border border-double  rounded-xl">
          <h4 className="font-bold">- Chương Trình Khuyến Mại:</h4>
          <ul className="">
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
              + Tặng Balo laptop chống sốc / hoặc / Túi xách AnTech Việt Nam trị
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
          <h4 className="font-bold mt-2">
            (*)Tặng Hệ điều hành Windows Bản Quyền theo máy
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
