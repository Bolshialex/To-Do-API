const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const checkToken = require("../middleware/checkToken");

//gets all users
router.get("/", checkToken, userControllers.getAllUsers); //Tested
//creates a user
router.post("/register", userControllers.createUser); //Tested
//gets a user given the user id
router.get("/:user_id", checkToken, userControllers.getUserById); //Tested
//updates a user given the user id
router.put("/:user_id", checkToken, userControllers.updateUser); //Tested
//deletes a user given the user id
router.delete("/:user_id", checkToken, userControllers.deleteUser); //Tested
//logs in a user
router.post("/login", userControllers.loginUser); //Tested

module.exports = router;
