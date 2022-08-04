const mongoose = require("mongoose");
const productDetails = mongoose.model("productDetails");

exports.list_all_productDetailss = (req, res) => {
  productDetails.find({}, (err, productDetailss) => {
    if (err) res.send(err);
    res.json(productDetailss);
  });
};

exports.create_a_productDetails = (req, res) => {
  const newproductDetails = new productDetails(req.body);

  newproductDetails.save((err, productDetails) => {
    if (err) res.send(err);
    res.json(productDetails);
  });
};

exports.read_a_productDetails = (req, res) => {
  productDetails.find(
    { idSanPham: req.params.idSanPham },
    (err, productDetails) => {
      console.log("req.params.idSanPham", req.params.idSanPham);
      if (err) res.send(err);
      res.json(productDetails);
    }
  );
};

exports.getInfoProductDetails = (req, res) => {
  productDetails.aggregate(
    [
      { $match: { idSanPham: mongoose.Types.ObjectId(req.params.idSanPham) } },
      {
        $group: {
          _id: "$idSanPham",
          mausac: { $push: "$mauSac" },
          ram: { $push: "$ram" },
          gia: { $push: "$donGia" },
          cpu: { $addToSet: "$cpu" },
          oCUng: { $addToSet: "$oCUng" },
          cardDoHoa: { $addToSet: "$cardDoHoa" },
          manHinh: { $addToSet: "$manHinh" },
          audio: { $addToSet: "$audio" },
          wedCam: { $addToSet: "$wedCam" },
          pin: { $addToSet: "$pin" },
          kichThuoc: { $addToSet: "$kichThuoc" },
        },
      },
      {
        $unwind: "$cardDoHoa",
      },
      {
        $unwind: "$manHinh",
      },
      {
        $unwind: "$audio",
      },
      {
        $unwind: "$wedCam",
      },
      {
        $unwind: "$pin",
      },
      {
        $unwind: "$kichThuoc",
      },
      {
        $unwind: "$oCUng",
      },
      {
        $unwind: "$cpu",
      },
    ],
    (err, productDetails) => {
      console.log("req.params.idSanPham", req.params.idSanPham);
      if (err) res.send(err);
      res.json(productDetails);
    }
  );
};

exports.update_a_productDetails = (req, res) => {
  productDetails.findOneAndUpdate(
    { _id: req.params.idSanPham },
    req.body,
    { new: true },
    (err, productDetails) => {
      if (err) res.send(err);
      res.json(productDetails);
    }
  );
};

exports.delete_a_productDetails = (req, res) => {
  productDetails.deleteOne({ _id: req.params.idSanPham }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "productDetails successfully deleted",
      _id: req.params.idSanPham,
    });
  });
};
