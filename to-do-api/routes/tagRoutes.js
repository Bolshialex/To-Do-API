const tagController = require("../controllers/tagControllers");
const express = require("express");
const router = express.Router();
const checkToken = require("../middleware/checkToken");

router.use(checkToken);

router.get("/:user_id", tagController.getAllTagsByUser);
router.post("/:user_id", tagController.createTagByUser);
router.put("/:tag_id", tagController.updateTag);
router.delete("/:tag_id", tagController.deleteTag);
router.get("/:tag_id", tagController.getTagById);

module.exports = router;
