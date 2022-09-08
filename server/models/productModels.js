const mongoose = require("mongoose");

const { Schema } = mongoose;
const productSchema = new Schema(
  {
    tenSanPham: {
      type: String,
      required: "Tên Sản Phẩm Không Được Để Trống",
    },
    hinhanh: {
      type: String,
    },
    maLoaiSanPham: {
      type: String,
      required: "Loại Sản Phẩm Không Được Để Trống",
    },
    soLuong: {
      type: Number,
      required: "Số Lượng Sản Phẩm Không Được Để Trống",
    },

    donGiaSP: {
      type: String,
      required: "Đơn Giá Không Được Để Trống",
    },

    cpu: {
      type: String,
    },
    oCUng: {
      type: String,
    },
    cardDoHoa: {
      type: String,
    },
    manHinh: {
      type: String,
    },
    audio: {
      type: String,
    },
    wedCam: {
      type: String,
    },
    pin: {
      type: String,
    },
    kichThuoc: {
      type: String,
    },
    nhuCau: {
      type: String,
    },
  },
  { collection: "product" }
);

module.exports = mongoose.model("product", productSchema);
