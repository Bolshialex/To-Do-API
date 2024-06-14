const mongoose = require("mongoose");

//add description to task schema
const taskSchema = new mongoose.Schema({
  task_name: { type: String, required: true },
  description: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  is_completed: { type: Boolean, default: false },
  date_created: { type: Date, default: Date.now },
  date_completed: { type: Date },
  tags: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Tag" },
      name: String,
    },
  ],
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
