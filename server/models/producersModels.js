const mongoose = require("mongoose");

const { Schema } = mongoose;
const producersSchema = new Schema(
  {
    tenNSX: {
      type: String,
      required: "Tên Nhà Sản Xuất Không Được Để Trống",
    },
    diaChiNSX: {
      type: String,
      required: "",
    },
    websiteNSX: {
      type: String,
    },
  },
  { collection: "producers" }
);

module.exports = mongoose.model("producers", producersSchema);
