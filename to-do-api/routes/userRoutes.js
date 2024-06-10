const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const checkToken = require("../middleware/checkToken");

router
  .get("/", checkToken, userControllers.getAllUsers)
  .post("/", userControllers.createUser);
router
  .get("/:id", checkToken, userControllers.getUserById)
  .put("/:id", checkToken, userControllers.updateUser)
  .delete("/:id", checkToken, userControllers.deleteUser);
router.post("/login", userControllers.loginUser);

module.exports = router;
