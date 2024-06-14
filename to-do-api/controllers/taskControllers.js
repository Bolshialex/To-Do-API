const Task = require("../models/taskModel");
const Tag = require("../models/tagModel");
require("dotenv").config();

const getTaskById = async (req, res) => {
  const id = req.params.task_id;
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
  const user_id = req.params.user_id;
  const taskInfo = {
    task_name: req.body.task_name,
    user_id: user_id,
  };
  try {
    const task = new Task(taskInfo);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const id = req.params.task_id;

  const taskInfo = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, taskInfo, { new: true });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDayCompleted = async (req, res) => {
  const id = req.params.task_id;
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

const getAllNotCompletedTasks = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const tasks = await Task.find({ user_id: user_id, is_completed: false });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.task_id;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertTag = async (req, res) => {
  const { task_id, tag_id } = req.params;
  try {
    const task = await Task.findById(task_id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const tag = await Tag.findById(tag_id);
    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }

    const existingTag = task.tags.find((tag) => tag._id.equals(tag_id));
    if (existingTag) {
      return res
        .status(400)
        .json({ message: "Tag already exists in the task" });
    }

    task.tags.push({ _id: tag_id, tag_name: tag.tag_name });
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeTag = async (req, res) => {
  const { task_id, tag_id } = req.params;
  try {
    const task = await Task.findById(task_id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const tag = await Tag.findById(tag_id);
    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }

    task.tags.pull(tag_id);
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasksByTag = async (req, res) => {
  const { user_id, tag_id } = req.params;

  try {
    const tasks = await Task.find({
      user_id: user_id,
      //accesses the array and uses _id : tag_id as the condition
      //array => anything that matches the condition
      tags: { $elemMatch: { _id: tag_id } },
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasksByUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const tasks = await Task.find({ user_id: user_id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  updateDayCompleted,
  insertTag,
  removeTag,
  getTasksByTag,
  getAllNotCompletedTasks,
  getTaskById,
  getTasksByUser,
};
