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

exports.getDetail = (req, res) => {
  productDetails.findById(req.params.id, (err, productDetails) => {
    if (err) res.send(err);
    res.json(productDetails);
  });
};

exports.upDateDetail = (req, res) => {
  console.log(req.body);
  productDetails.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, productDetails) => {
      if (err) res.send(err);
      res.json(productDetails);
    }
  );
};
exports.getProductDetail = (req, res) => {
  productDetails.aggregate(
    [
      {
        $group: {
          _id: "$idSanPham",
          mausac: { $addToSet: "$mauSac" },
          ram: { $push: "$ram" },
          gia: { $push: "$donGia" },
        },
      },
    ],
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
          mausac: { $addToSet: "$mauSac" },
          ram: { $push: "$ram" },
          gia: { $push: "$donGia" },
          giaCu: { $push: "$giaCu" },
        },
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
  console.log(req.body);
  if (req.file) {
    productDetails.findOneAndUpdate(
      { _id: req.params.idSanPham },
      {
        idSanPham: req.body.idSanPham,
        mauSac: req.body.mauSac,
        ram: req.file.ram,
        donGia: req.body.donGia,
        giaCu: req.body.giaCu,
        soLuong: req.body.soLuong,
      },
      { new: true },
      (err, productDetails) => {
        if (err) res.send(err);
        res.json(productDetails);
      }
    );
  } else {
    productDetails.findOneAndUpdate(
      { _id: req.params.idSanPham },
      {
        idSanPham: req.body.idSanPham,
        mauSac: req.body.mauSac,
        ram: req.file.ram,
        donGia: req.body.donGia,
        giaCu: req.body.giaCu,
        soLuong: req.body.soLuong,
      },
      { new: true },
      (err, productDetails) => {
        if (err) res.send(err);
        res.json(productDetails);
      }
    );
  }
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

exports.getAllProductDetails = (req, res) => {
  productDetails
    .aggregate(
      [
        {
          $group: {
            _id: "$idSanPham",
            mausac: { $addToSet: "$mauSac" },
            ram: { $addToSet: "$ram" },
            gia: { $push: "$donGia" },
            soLuong: { $sum: "$soLuong" },
          },
        },
        {
          $lookup: {
            from: "product",
            localField: "_id",
            foreignField: "_id",
            as: "Product",
          },
        },
        {
          $unwind: "$Product",
        },
      ],
      (err, results) => {
        if (err) res.send(err);
        res.json(results);
      }
    )
    .sort({ _id: 1 });
};

exports.UpdateQuantity = (req, res) => {
  console.log(req.params);
  productDetails.updateOne(
    {
      idSanPham: new mongoose.Types.ObjectId(req.params.infoId),
      mauSac: req.params.mausac,
      ram: req.params.ram,
    },
    {
      $inc: { soLuong: -req.params.quantity },
    },
    (err, proInfo) => {
      if (err) res.send(err);
      console.log(proInfo);
      res.json(proInfo);
    }
  );
};

exports.checkProductDetails = (req, res) => {
  console.log(req.params);
  productDetails.aggregate(
    [
      {
        $project: {
          idSanPham: 1,
          mauSac: 1,
          soLuong: 1,
        },
      },
      {
        $match: {
          idSanPham: mongoose.Types.ObjectId(req.params.proID),
          mauSac: req.params.mausac,
        },
      },
    ],
    (err, result) => {
      if (err) res.send(err);
      const { soLuong, ...data } = result[0];
      res.json(soLuong);
    }
  );
};
