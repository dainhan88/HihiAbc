const mongoose = require("mongoose");

const { Schema } = mongoose;
const returnproductSchema = new Schema(
  {
    hoTenKhachDoiTra: {
      type: String,
    },
    soDienThoatKhachDoiTra: {
      type: String,
    },
    emailKhachDoiTra: {
      type: String,
    },
    maDonHangKhachDoiTra: {
      type: String,
    },
    lyDoKhachDoiTra: {
      type: String,
    },
    tinhTrangXuLyDoiTra: {
      type: String,
      default: "Chờ xử lý",
    },
  },
  { collection: "returnproduct" }
);

module.exports = mongoose.model("returnproduct", returnproductSchema);
