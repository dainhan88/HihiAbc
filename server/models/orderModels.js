const mongoose = require("mongoose");

const { Schema } = mongoose;
const orderSchema = new Schema(
  {
    hoTen: {
      type: String,
      required: "Họ Và Tên Không Được Để Trống",
    },
    soDienThoai: {
      type: Number,
      required: "Số Điện Thoại Không Được Để Trống",
    },
    diaChi: {
      type: String,
      required: "Địa Chỉ Không Được Để Trống",
    },
    eMail: {
      type: String,
    },
    hinhThucThanhToan: {
      type: String,
      required: "Bạn Chưa Chọn Hình Thức Thanh Toán",
    },
    ghiChuKhachHang: {
      type: String,
    },
    thongTinChiTiet: {
      type: [],
      requried: true,
    },
    tongTien: {
      type: Number,
      requried: true,
    },
    trangThai: {
      type: String,
      requried: true,
      default: "Chờ xác nhận",
    },
    ngayDat: {
      type: Date,
      default: new Date(),
    },
  },
  { collection: "order" }
);

module.exports = mongoose.model("order", orderSchema);
