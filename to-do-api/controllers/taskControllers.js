const Task = require("../models/taskModel");
require("dotenv").config();

const getAllTasksByUser = async (req, res) => {
  try {
    const tasks = await Task.find({ user_id: req.params.user_id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { user_id } = req.params;
    const taskInfo = {
      task_name: req.body.task_name,
      user_id: user_id,
    };

    const task = new Task(taskInfo);
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
const updateDayCompleted = async (req, res) => {
  const { id } = req.params.task_id;
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      task.date_completed = new Date();
      task.is_completed = true;
      await task.save();
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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

module.exports = {
  getAllTasksByUser,
  createTask,
  updateTask,
  deleteTask,
  updateDayCompleted,
};
