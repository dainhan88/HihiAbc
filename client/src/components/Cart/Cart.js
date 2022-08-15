import React from "react";
import { useCart } from "../../context/Cartcontext";
import { v4 as uuidv4 } from "uuid";
import { converCurences } from "../../config";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    totalPrice,
    removeToCart,
    updateQuantityDecrement,
    index,
    handleQuantityChange,
    updateQuantityIncrement,
  } = useCart();

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
                    <div className="flex ">
                      Số Lượng:{" "}
                      <div className=" flex border rounded-md  ml-5 my-1 h-6">
                        <button
                          type="button"
                          aria-label="Decrement value"
                          className="w-[25px] flex items-center justify-center"
                          onClick={() =>
                            updateQuantityDecrement(index, cartItems)
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <input
                          value={item.quantity}
                          // data-value={quantity}
                          onChange={(e) => {
                            handleQuantityChange(
                              index,
                              cartItems,
                              e.target.value
                            );
                          }}
                          className="w-[25px] outline-none border-none h-full text-center"
                        ></input>
                        <button
                          aria-label="Increment value"
                          type="button"
                          className="w-[25px] flex items-center justify-center"
                          onClick={(e) => {
                            updateQuantityIncrement(index, cartItems);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 "
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
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
