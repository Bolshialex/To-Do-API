const tagController = require("../controllers/tagControllers");
const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/checkToken");

router.use(checkToken);

//gets all tags from a user given the id
router.get("/user/:user_id", tagController.getAllTagsByUser); //Tested
//creates a tag for the user
router.post("/user/:user_id", tagController.createTagByUser); //Tested
//updates a tag given the tag id
router.put("/:tag_id", tagController.updateTag); //Tested
//deletes a tag given the tag id
router.delete("/:tag_id", tagController.deleteTag); //Tested
//gets a tag given the tag id
router.get("/:tag_id", tagController.getTagById); //Tested

module.exports = router;
