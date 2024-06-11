const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const checkToken = require("../middleware/checkToken");

router.get("/:user_id", taskControllers.getAllTasksByUser);
router.post("/:user_id", taskControllers.createTask);
router.put("/:task_id", taskControllers.updateTask);
router.delete("/:task_id", taskControllers.deleteTask);
router.put("/:task_id/completed", taskControllers.updateDayCompleted);

module.exports = router;
