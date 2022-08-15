const mongoose = require("mongoose");

const { Schema } = mongoose;
const productDetailsSchema = new Schema(
  {
    idSanPham: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: "product1 cannot be blank",
    },
    mauSac: {
      type: String,
      required: "Màu Sắc Không Được Để Trống",
    },
    ram: {
      type: String,
    },

    donGia: {
      type: Number,
      required: "Đơn Giá Không Được Để Trống",
    },
    soLuong: {
      type: Number,
      required: "Số Lượng Không Được Để Trống",
    },
  },
  { collection: "productDetails" }
);

module.exports = mongoose.model("productDetails", productDetailsSchema);
