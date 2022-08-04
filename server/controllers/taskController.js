const mongoose = require("mongoose");
const task = mongoose.model("task");
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

exports.uploadImage = upload.single("image");

exports.list_all_tasks = (req, res) => {
  task.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};

exports.create_a_task = (req, res) => {
  console.log(req.file);
  const newTask = new task({
    task1: req.body.task1,
    task2: req.body.task2,
    image: req.file.filename,
  });
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = (req, res) => {
  task.findById(req.params.taskId, (err, task) => {
    console.log("req.params.taskId", req.params.taskId);
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    { $set: req.body },
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_a_task = (req, res) => {
  task.deleteOne({ _id: req.params.taskId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "task successfully deleted",
      _id: req.params.taskId,
    });
  });
};
