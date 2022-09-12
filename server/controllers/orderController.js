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

//
exports.getOrderByDateRange = (req, res) => {
  console.log(req.params);
  order
    .aggregate(
      [
        {
          $project: {
            trangThai: 1,
            ngayDat: 1,
            // day: { $dayOfMonth: "$updatedAt" },
            // month: { $month: "$updatedAt" },
            // year: { $year: "$updatedAt" },
            tongTien: 1,
          },
        },
        {
          $match: {
            trangThai: "Đã giao",
            ngayDat: {
              $gte: new Date(req.params.startDate),
              $lte: new Date(req.params.endDate),
            },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%d/%m/%Y", date: "$ngayDat" } },
            tongTien: { $sum: "$tongTien" },
            count: { $sum: 1 },
            ngayDat: { $first: "$ngayDat" },
          },
        },
        {
          $project: {
            tongTien: 1,
            count: 1,
            ngayDat: 1,
          },
        },
      ],
      (err, orders) => {
        if (err) res.send(err);
        res.json(orders);
      }
    )
    .sort({ ngayDat: 1 });
};

//search
exports.filterOrder = (req, res) => {
  if (_.isEmpty(req.query)) {
    order.find({}, (err, orders) => {
      if (err) res.send(err);
      res.json(orders);
    });
  } else {
    order.aggregate(
      [
        {
          $match: {
            soDienThoai: {
              $regex: ".*" + req.query.soDienThoai + ".*",
              $options: "$gi",
            },
          },
        },
      ],
      (err, order) => {
        if (err) res.send(err);
        res.json(order);
      }
    );
  }
};

//Đơn theo sdt
exports.getQuantityOderByPhone = (req, res) => {
  order.aggregate(
    [
      {
        $group: {
          _id: "$soDienThoai",
          fullName: { $first: "$hoTen" },
          address: { $first: "$diaChi" },
          // count: { $sum: 1 },
          total: {
            $sum: {
              $cond: {
                if: { $eq: ["$trangThai", "Đã giao"] },
                then: "$tongTien",
                else: 0,
              },
            },
          },
          count: {
            $sum: {
              $cond: {
                if: { $eq: ["$trangThai", "Đã giao"] },
                then: 1,
                else: 0,
              },
            },
          },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ],
    (err, orders) => {
      if (err) res.send(err);
      res.json(orders);
    }
  );
};

//tra cuu don hang danh cho khach hang
exports.updateStatus = (req, res) => {
  order.findByIdAndUpdate(
    req.params.id,
    { $set: { trangThai: req.body.trangThai } },
    (err, result) => {
      if (err) res.send(err);
      res.json(result);
    }
  );
};

exports.countItemsByState = (req, res) => {
  order.aggregate(
    [
      {
        $match: { trangThai: req.params.status },
      },
    ],
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};

exports.findorderByQuery = (req, res) => {
  const findName = req.params.query;
  order.find(
    {
      soDienThoai: {
        $regex: ".*" + findName + ".*",
        $options: "$gi",
      },
    },
    (err, order) => {
      if (err) res.send(err);
      res.join(order);
    }
  );
};

exports.getorderByCondition = (req, res) => {
  console.log();
  if (req.params.query.length <= 10) {
    req.params.query = req.params.query;
  } else {
    req.params.query = mongoose.Types.ObjectId(req.params.query);
  }
  if (req.params.query == "" || req.params.query == undefined) {
    order.find({}, (err, orders) => {
      if (err) res.send(err);
      res.json(orders);
    });
  }
  order.aggregate(
    [
      {
        $match: {
          $or: [
            {
              _id: req.params.query,
            },
            {
              soDienThoai: +req.params.query,
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
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};

exports.getPriceByTime = (req, res) => {
  // console.log(req.params);
  // [{}];
  order.aggregate(
    [
      {
        $addFields: {
          _newID: { $first: "$thongTinChiTiet._id" },
          ttct: "$thongTinChiTiet",
        },
      },
      { $unwind: "$ttct" },
      {
        $project: {
          _id: 1,
          ttct: 1,
          _newID: 1,
          trangThai: 1,
          ngayDat: 1,
        },
      },

      {
        //   // giống where trong sql
        $match: {
          trangThai: "Đã giao",
          _newID: req.params.id,
          // _id: req.params.id,
          // ram: req.params.ram,
        },
      },
      // {

      // },
      {
        $group: {
          _id: {
            ID: "$_newID",
            ram: "$ttct.ram",
          },
          price: { $push: "$ttct.gia" },
          ram: { $first: "$ttct.ram" },
        },
      },
      // { $sort: { _id.day: -1, month: -1 } },

      { $sort: { ram: 1 } },
    ],
    (err, order) => {
      if (err) res.send(err);
      res.json(order);
    }
  );
};
