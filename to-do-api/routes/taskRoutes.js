const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const checkToken = require("../middleware/checkToken");

router.use(checkToken);

router.get("/:task_id", taskControllers.getTaskById);
router.post("/:user_id", taskControllers.createTask);
router.put("/update/:task_id", taskControllers.updateTask);
router.delete("/:task_id", taskControllers.deleteTask);
router.put("/completed/:task_id", taskControllers.updateDayCompleted);
router.put("/:task_id/tags/:tag_id", taskControllers.insertTag);
router.put("/remove/:task_id/tags/:tag_id", taskControllers.removeTag);
router.get("/:user_id/tags/:tag_id", taskControllers.getTasksByTag);
router.get("/uncompleted/:user_id", taskControllers.getAllNotCompletedTasks);
router.get("/user/:user_id", taskControllers.getTasksByUser);

module.exports = router;
