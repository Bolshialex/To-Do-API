const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task_name: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  is_completed: { type: Boolean, default: false },
  date_created: { type: Date, default: Date.now },
  date_completed: { type: Date },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
