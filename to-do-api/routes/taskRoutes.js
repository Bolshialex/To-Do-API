const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const checkToken = require("../middleware/checkToken");

router.get("/:user", taskControllers.getAllTasksByUser);
router.post("/:id", taskControllers.createTask);
router.put("/:id", taskControllers.updateTask);
router.delete("/:id", taskControllers.deleteTask);

module.exports = router;
