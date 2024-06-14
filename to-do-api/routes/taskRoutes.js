const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const checkToken = require("../middleware/checkToken");

router.use(checkToken);

//gets a task given the task id
router.get("/:task_id", taskControllers.getTaskById); //Tested

//Creates a task for the user
router.post("/user/:user_id", taskControllers.createTask); //Tested

//check
//updates a task given the task id
router.put("/:task_id", taskControllers.updateTask); //Tested

//deletes a task given the task id
router.delete("/:task_id", taskControllers.deleteTask); //Tested

//completes a task given the task id
router.put("/:task_id/complete", taskControllers.updateDayCompleted); //Tested

//inserts a tag to a task
router.put("/:task_id/tags/:tag_id", taskControllers.insertTag); //Tested

//removes a tag from a task
router.put("/:task_id/tags/:tag_id/remove", taskControllers.removeTag); //Tested

//gets all tasks with a given tag
router.get("/user/:user_id/tags/:tag_id", taskControllers.getTasksByTag); //Tested

//reverse
//gives all tasks that are not completed by user
router.get(
  "/user/:user_id/incomplete",
  taskControllers.getAllNotCompletedTasks
); //Tested

//gets all tasks from a user given the id
router.get("/user/:user_id", taskControllers.getTasksByUser); //Tested

module.exports = router;
