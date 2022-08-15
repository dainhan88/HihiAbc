const mongoose = require("mongoose");
const warrantyclaim = mongoose.model("warrantyclaim");

exports.list_all_warrantyclaims = (req, res) => {
  warrantyclaim.find({}, (err, warrantyclaim) => {
    if (err) res.send(err);
    res.json(warrantyclaim);
  });
};

exports.create_a_warrantyclaim = (req, res) => {
  const newwarrantyclaim = new warrantyclaim(req.body);
  newwarrantyclaim.save((err, warrantyclaim) => {
    if (err) res.send(err);
    res.json(warrantyclaim);
  });
};

exports.read_a_warrantyclaim = (req, res) => {
  warrantyclaim.find(
    { idwarrantyclaim: req.params.idwarrantyclaim },
    (err, warrantyclaim) => {
      console.log("req.params.idwarrantyclaim", req.params.idwarrantyclaim);
      if (err) res.send(err);
      res.json(warrantyclaim);
    }
  );
};

exports.update_a_warrantyclaim = (req, res) => {
  warrantyclaim.findOneAndUpdate(
    { _id: req.params.warrantyclaimId },
    { $set: req.body },
    { new: true },
    (err, warrantyclaim) => {
      if (err) res.send(err);
      res.json(warrantyclaim);
    }
  );
};

exports.delete_a_warrantyclaim = (req, res) => {
  warrantyclaim.deleteOne({ _id: req.params.idwarrantyclaim }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "warrantyclaim successfully deleted",
      _id: req.params.idwarrantyclaim,
    });
  });
};

exports.updateStatus = (req, res) => {
  warrantyclaim.findByIdAndUpdate(
    req.params.id,
    { $set: { tinhTrangXuLyYeuCau: req.body.tinhTrangXuLyYeuCau } },
    (err, result) => {
      if (err) res.send(err);
      res.json(result);
    }
  );
};

exports.countItemsByState = (req, res) => {
  warrantyclaim.aggregate(
    [
      {
        $match: { tinhTrangXuLyYeuCau: req.params.status },
      },
    ],
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};
