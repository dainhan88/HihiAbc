const mongoose = require("mongoose");
const producers = mongoose.model("producers");

exports.list_all_producerss = (req, res) => {
  producers.find({}, (err, producers) => {
    if (err) res.send(err);
    res.json(producers);
  });
};

exports.create_a_producers = (req, res) => {
  const newproducers = new producers(req.body);
  newproducers.save((err, producers) => {
    if (err) res.send(err);
    res.json(producers);
  });
};

exports.read_a_producers = (req, res) => {
  producers.find({ idproducers: req.params.idproducers }, (err, producers) => {
    console.log("req.params.idproducers", req.params.idproducers);
    if (err) res.send(err);
    res.json(producers);
  });
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

exports.delete_a_producers = (req, res) => {
  producers.deleteOne({ _id: req.params.idproducers }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "producers successfully deleted",
      _id: req.params.idproducers,
    });
  });
};
