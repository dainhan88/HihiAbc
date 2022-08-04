import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/Cartcontext";

const ProceedToOrder = () => {
  const { register, handleSubmit } = useForm();
  const { cartItems, totalPrice } = useCart();
  const handleOnSubmit = (data) => {
    data = {
      ...data,
      tongTien: totalPrice(),
      thongTinChiTiet: cartItems,
    };
    axios.post("/api/order", data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <h1 className="text-center mt-5 font-bold text-[30px] text-red-500">
          Tiến Hành Đặt Hàng
        </h1>
      </div>
      <div className=" page-container  ">
        <div className=" border border-cyan-600 m-4 p-2 group w-[auto] mx-40  ">
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
                    {...register("hoTen")}
                    placeholder="Nhập Họ Tên"
                    className="py-3 px-12 border boder-gray-300 rounded-lg  my-2 w-[100%] "
                    required
                  />
                </div>
              </>
              <>
                Số Điện Thoại*
                <div>
                  <input
                    required
                    type=""
                    name=""
                    maxLength="10"
                    {...register("soDienThoai")}
                    placeholder="Nhập Số Điện Thoại"
                    className="py-3 px-12 border boder-gray-300 rounded-lg w-[100%] my-2"
                  />
                </div>
              </>

              <>
                Địa Chỉ*
                <div>
                  <input
                    required
                    type="text"
                    name=""
                    {...register("diaChi")}
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
                    {...register("eMail")}
                    placeholder="Nhập Địa Chỉ Email"
                    className="py-3 px-12 border boder-gray-300 rounded-lg w-[100%] my-2"
                  />
                </div>
              </>
            </div>
            <div>
              <p>Hình Thức Thanh Toán*</p>
              <div className="flex gap-x-10">
                <div className="mx-28">
                  <input
                    required
                    type="radio"
                    {...register("hinhThucThanhToan")}
                    value="ShipCOD"
                    id="COD"
                  />
                  <label htmlFor="COD">Thanh Toán Khi Nhận Hàng (COD)</label>
                </div>
                <div>
                  <input
                    type="radio"
                    {...register("hinhThucThanhToan")}
                    value="Internet Banking"
                    id="Banking"
                  />
                  <label htmlFor="Banking">
                    Thanh Toán Bằng Trực Tuyến (Internet Banking)
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <>
                <div>
                  <ul>Ghi Chú Khách Hàng</ul>
                  <textarea
                    type="textarea"
                    {...register("ghiChuKhachHang")}
                    className="border border-black rounded-lg w-[100%] h-[100px] px-[5px]"
                  />
                </div>
              </>
            </div>
            <div className="flex  gap-x-10 font-bold text-2xl">
              <button
                type="submit"
                className="px-4 py-2 w-full font-bold text-2xl rounded-md bg-blue-600 text-white  hover:bg-red-900 ansition-all"
              >
                GỬI THÔNG TIN ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProceedToOrder;
