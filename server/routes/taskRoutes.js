const taskBuilder = require("../controllers/taskController");
const express = require("express");

const routes = express.Router();

routes.get("/", taskBuilder.list_all_tasks);
routes.get("/:taskId", taskBuilder.read_a_task);
routes.post("/", taskBuilder.uploadImage, taskBuilder.create_a_task);
routes.patch("/:taskId", taskBuilder.update_a_task);
routes.delete("/:taskId", taskBuilder.delete_a_task);

module.exports = routes;

// module.exports = app => {
//   app
//     .route('/tasks')
//     .get(taskBuilder.list_all_tasks)
//     .post(taskBuilder.create_a_task);

//   app
//     .route('/tasks/:taskId')
//     .get(taskBuilder.read_a_task)
//     .put(taskBuilder.update_a_task)
//     .delete(taskBuilder.delete_a_task);
// };
