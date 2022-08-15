const mongoose = require("mongoose");

const { Schema } = mongoose;
const warrantyclaimSchema = new Schema(
  {
    hoTenKhachYeuCau: {
      type: String,
    },
    soDienThoatKhachYeuCau: {
      type: String,
    },
    emailKhachYeuCau: {
      type: String,
    },
    maDonHangKhachYeuCau: {
      type: String,
    },
    lyDoKhachYeuCau: {
      type: String,
    },
    tinhTrangXuLyYeuCau: {
      type: String,
      default: "Chờ xử lý",
    },
  },
  { collection: "warrantyclaim" }
);

module.exports = mongoose.model("warrantyclaim", warrantyclaimSchema);
