const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const checkToken = require("../middleware/checkToken");

router
  .get("/", checkToken, userControllers.getAllUsers)
  .post("/register", userControllers.createUser);
router
  .get("/:user_id", checkToken, userControllers.getUserById)
  .put("/:user_id", checkToken, userControllers.updateUser)
  .delete("/:user_id", checkToken, userControllers.deleteUser);
router.post("/login", userControllers.loginUser);

module.exports = router;
