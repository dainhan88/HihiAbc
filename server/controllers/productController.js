const mongoose = require("mongoose");
const product = mongoose.model("product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      "images" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

exports.uploadImage = upload.single("hinhanh");

exports.list_all_products = (req, res) => {
  product.find({}, (err, products) => {
    if (err) res.send(err);
    res.json(products);
  });
};

exports.create_a_product = (req, res) => {
  console.log(req.file);
  const newproduct = new product({
    tenSanPham: req.body.tenSanPham,
    maLoaiSanPham: req.body.maLoaiSanPham,
    hinhanh: req.file.filename,
    soLuong: req.body.soLuong,
    donGiaSP: req.body.donGiaSP,
  });
  newproduct.save((err, product) => {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.read_a_product = (req, res) => {
  product.findById(req.params.productId, (err, product) => {
    console.log("req.params.productId", req.params.productId);
    if (err) res.send(err);
    res.json(product);
  });
};

exports.update_a_product = (req, res) => {
  product.findOneAndUpdate(
    { _id: req.params.productId },
    { $set: req.body },
    { new: true },
    (err, product) => {
      if (err) res.send(err);
      res.json(product);
    }
  );
};

exports.delete_a_product = (req, res) => {
  product.deleteOne({ _id: req.params.productId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "product successfully deleted",
      _id: req.params.productId,
    });
  });
};
