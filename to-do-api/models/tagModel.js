const mongoose = require("mongoose");

//maybe add color
const tagSchema = new mongoose.Schema({
  tag_name: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
