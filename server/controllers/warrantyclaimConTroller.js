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
    (err, warrantyclaim) => {
      if (err) res.send(err);
      res.json(warrantyclaim);
    }
  );
};

exports.findWarrantyclaimByQuery = (req, res) => {
  const findName = req.params.query;
  warrantyclaim.find(
    {
      soDienThoatKhachYeuCau: {
        $regex: ".*" + findName + ".*",
        $options: "$gi",
      },
    },
    (err, warrantyclaim) => {
      if (err) res.send(err);
      res.join(warrantyclaim);
    }
  );
};

exports.getwarrantyclaimByCondition = (req, res) => {
  console.log();
  if (req.params.query.length <= 10) {
    req.params.query = req.params.query;
  } else {
    req.params.query = mongoose.Types.ObjectId(req.params.query);
  }
  if (req.params.query == "" || req.params.query == undefined) {
    warrantyclaim.find({}, (err, warrantyclaims) => {
      if (err) res.send(err);
      res.json(warrantyclaims);
    });
  }
  warrantyclaim.aggregate(
    [
      {
        $match: {
          $or: [
            {
              _id: req.params.query,
            },
            {
              soDienThoatKhachYeuCau: req.params.query,
            },
          ],
          // $or: [
          //   {
          //     _id: {
          //       $regex: ".*" + req.params.query + ".*",
          //       $options: "$gi",
          //     },
          //   },
          //   {
          //     soDienThoatKhachYeuCau: {
          //       $regex: ".*" + req.params.query + ".*",
          //       $options: "$gi",
          //     },
          //   },
          // ],
        },
      },
    ],
    (err, warrantyclaim) => {
      if (err) res.send(err);
      res.json(warrantyclaim);
    }
  );
};
