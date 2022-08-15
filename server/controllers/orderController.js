const mongoose = require("mongoose");
const order = mongoose.model("order");

exports.list_all_orders = (req, res) => {
  order.find({}, (err, orders) => {
    if (err) res.send(err);
    res.json(orders);
  });
};

exports.getOrderByState = (req, res) => {
  order.aggregate(
    [
      {
        $match: { trangThai: req.params.trangThai },
      },
    ],
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};

exports.create_a_order = (req, res) => {
  const neworder = new order(req.body);
  neworder.save((err, order) => {
    if (err) res.send(err);
    res.json(order);
  });
};

exports.read_a_order = (req, res) => {
  order.find({ idorder: req.params.idorder }, (err, order) => {
    console.log("req.params.idorder", req.params.idorder);
    if (err) res.send(err);
    res.json(order);
  });
};

exports.update_a_order = (req, res) => {
  order.findOneAndUpdate(
    { _id: req.params.idorder },
    {
      trangThai: req.body.trangThai,
    },
    { new: true },
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};

exports.delete_a_order = (req, res) => {
  order.deleteOne({ _id: req.params.idorder }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "order successfully deleted",
      _id: req.params.idorder,
    });
  });
};

exports.getSold = (req, res) => {
  order.aggregate(
    [
      {
        $match: { trangThai: "Đã giao" },
      },
      { $unwind: "$thongTinChiTiet" },
      {
        $project: {
          thongTinChiTiet: 1,
        },
      },
      {
        $group: {
          _id: "$thongTinChiTiet._id",
          soluong: { $sum: "$thongTinChiTiet.quantity" },
          // mausac: { $addToSet: "$thongTinChiTiet.mausac" },
        },
      },
    ],
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};

exports.update_a_producers = (req, res) => {
  producers.findOneAndUpdate(
    { _id: req.params.producersId },
    { $set: req.body },
    { new: true },
    (err, producers) => {
      if (err) res.send(err);
      res.json(producers);
    }
  );
};

exports.getStatistical = (req, res) => {
  order.aggregate(
    [
      {
        $group: {
          _id: "$trangThai",
          count: { $sum: 1 },
        },
      },
    ],
    (err, orders) => {
      if (err) res.send(err);
      res.json(orders);
    }
  );
};

exports.getProfitOrderNowMonth = (req, res) => {
  order
    .aggregate(
      [
        {
          $project: {
            trangThai: 1,
            ngayDat: { $month: "$ngayDat" },
            tongTien: 1,
          },
        },
        {
          $match: {
            month: new Date().getMonth() + 1,
          },
        },
        {
          $group: {
            _id: "$trangThai",
            tongTien: { $sum: "$tongTien" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            trangThai: "$_id",
            tongTien: 1,
            count: 1,
          },
        },
      ],
      (err, orders) => {
        if (err) res.send("Không có đơn hàng thành công");
        const { tongTien } = orders[0];
        res.json(orders);
      }
    )
    .sort({ _id: 1 });
};

exports.getProfitPerMonth = (req, res) => {
  order
    .aggregate(
      [
        {
          $project: {
            trangThai: 1,
            month: { $month: "$ngayDat" },
            day: { $dayOfMonth: "$ngayDat" },
            tongTien: 1,
          },
        },
        {
          $match: {
            state: "Đã giao",
            month: new Date().getMonth() + 1,
          },
        },
        {
          $group: {
            _id: "$day",
            date: { $first: "$day" },
            tongTien: { $sum: "$tongTien" },
          },
        },
      ],
      (err, orders) => {
        if (err) res.send(err);
        res.json(orders);
      }
    )
    .sort({ _id: 1 });
};

// doanh thu hàng tháng
exports.getProfitMonthly = (req, res) => {
  order
    .aggregate(
      [
        {
          $project: {
            hoTen: 1,
            trangThai: 1,
            month: { $month: "$ngayDat" },
            tongTien: 1,
          },
        },
        {
          $match: {
            trangThai: "Đã giao",
          },
        },
        {
          $group: {
            _id: "$month",
            // Month: { $first: "$month" },
            total: { $sum: "$tongTien" },
          },
        },
      ],
      (err, orders) => {
        if (err) res.send(err);
        res.json(orders);
      }
    )
    .sort({ _id: 1 });
};
