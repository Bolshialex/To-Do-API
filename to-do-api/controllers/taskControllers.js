const Task = require("../models/taskModel");
require("dotenv").config();

const getAllTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.params.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const taskInfo = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, taskInfo, { new: true });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add the updateDayCompleted function here

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllTasksByUser, createTask, updateTask, deleteTask };
