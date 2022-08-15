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
    cpu: req.body.cpu,
    oCUng: req.body.oCUng,
    donGiaSP: req.body.donGiaSP,

    cardDoHoa: req.body.cardDoHoa,
    manHinh: req.body.manHinh,
    audio: req.body.audio,
    wedCam: req.body.wedCam,
    pin: req.body.pin,
    kichThuoc: req.body.kichThuoc,
    nhuCau: req.body.nhuCau,
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
  console.log(req.body);
  if (req.file) {
    product.findOneAndUpdate(
      { _id: req.params.productId },
      {
        tenSanPham: req.body.tenSanPham,
        maLoaiSanPham: req.body.maLoaiSanPham,
        hinhanh: req.file.filename,
        soLuong: req.body.soLuong,
        cpu: req.body.cpu,
        oCUng: req.body.oCUng,
        donGiaSP: req.body.donGiaSP,
        cardDoHoa: req.body.cardDoHoa,
        manHinh: req.body.manHinh,
        audio: req.body.audio,
        wedCam: req.body.wedCam,
        pin: req.body.pin,
        kichThuoc: req.body.kichThuoc,
        nhuCau: req.body.nhuCau,
      },
      { new: true },
      (err, product) => {
        if (err) res.send(err);
        res.json(product);
      }
    );
  } else {
    product.findOneAndUpdate(
      { _id: req.params.productId },
      {
        tenSanPham: req.body.tenSanPham,
        maLoaiSanPham: req.body.maLoaiSanPham,
        soLuong: req.body.soLuong,
        cpu: req.body.cpu,
        oCUng: req.body.oCUng,
        donGiaSP: req.body.donGiaSP,
        cardDoHoa: req.body.cardDoHoa,
        manHinh: req.body.manHinh,
        audio: req.body.audio,
        wedCam: req.body.wedCam,
        pin: req.body.pin,
        kichThuoc: req.body.kichThuoc,
        nhuCau: req.body.nhuCau,
      },
      { new: true },
      (err, product) => {
        if (err) res.send(err);
        res.json(product);
      }
    );
  }
};

exports.getOrderBynhuCau = (req, res) => {
  order.aggregate(
    [
      {
        $match: { nhuCau: req.params.nhuCau },
      },
    ],
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

// lấy theo thể loại
exports.list_all_products_cate = (req, res) => {
  product.aggregate(
    [
      {
        $match: {
          categories: mongoose.Types.ObjectId(req.params.cateId),
        },
      },
      {
        $lookup: {
          from: "category",
          localField: "categories",
          foreignField: "_id",
          as: "categories",
        },
      },
      {
        $lookup: {
          from: "productInfo",
          localField: "_id",
          foreignField: "productID",
          as: "productInfo",
        },
      },
      {
        $unwind: "$categories",
      },
      { $unwind: "$productInfo" },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$name" },
          unitPrice: { $first: "$unitPrice" },
          unitPromotionalPrice: { $first: "$unitPromotionalPrice" },
          images: { $first: "$images" },
          categories: { $first: "$categories" },
          productInfo: { $push: "$productInfo" },
        },
      },
    ],
    (err, product) => {
      if (err) res.send(err);
      res.json(product);
    }
  );
};
