const mongoose = require("mongoose");
const returnproduct = mongoose.model("returnproduct");

exports.list_all_returnproducts = (req, res) => {
  returnproduct.find({}, (err, returnproduct) => {
    if (err) res.send(err);
    res.json(returnproduct);
  });
};

exports.create_a_returnproduct = (req, res) => {
  const newreturnproduct = new returnproduct(req.body);
  newreturnproduct.save((err, returnproduct) => {
    if (err) res.send(err);
    res.json(returnproduct);
  });
};

exports.read_a_returnproduct = (req, res) => {
  returnproduct.find(
    { idreturnproduct: req.params.idreturnproduct },
    (err, returnproduct) => {
      console.log("req.params.idreturnproduct", req.params.idreturnproduct);
      if (err) res.send(err);
      res.json(returnproduct);
    }
  );
};

exports.update_a_returnproduct = (req, res) => {
  returnproduct.findOneAndUpdate(
    { _id: req.params.returnproductId },
    { $set: req.body },
    { new: true },
    (err, returnproduct) => {
      if (err) res.send(err);
      res.json(returnproduct);
    }
  );
};

exports.delete_a_returnproduct = (req, res) => {
  returnproduct.deleteOne({ _id: req.params.idreturnproduct }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "returnproduct successfully deleted",
      _id: req.params.idreturnproduct,
    });
  });
};

exports.updateStatus = (req, res) => {
  returnproduct.findByIdAndUpdate(
    req.params.id,
    { $set: { tinhTrangXuLyDoiTra: req.body.tinhTrangXuLyDoiTra } },
    (err, result) => {
      if (err) res.send(err);
      res.json(result);
    }
  );
};

exports.countItemsByState = (req, res) => {
  returnproduct.aggregate(
    [
      {
        $match: { tinhTrangXuLyDoiTra: req.params.status },
      },
    ],
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};
