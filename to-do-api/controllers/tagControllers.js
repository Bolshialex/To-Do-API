const Tag = require("../models/tagModel");
const Task = require("../models/taskModel");

//by id ?
//done
const getAllTagsByUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const tags = await Tag.find({ user_id: user_id });
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//by id ?
//done
const createTagByUser = async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const tag = new Tag({ ...req.body, user_id: user_id });
    await tag.save();
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//not updating inside user tasks
//done?
const updateTag = async (req, res) => {
  const id = req.params.tag_id;
  const tagInfo = req.body;
  try {
    const tag = await Tag.findByIdAndUpdate(id, tagInfo, { new: true });
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    } else {
      await tag.save();
      await updateTagInTask(id, tagInfo);
      res.json(tag);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function updateTagInTask(tag_id, tagInfo) {
  const tasks = await Task.find({ "tags._id": tag_id });
  tasks.forEach(async (task) => {
    const tag = task.tags.id(tag_id);
    tag.set(tagInfo);
    await task.save();
  });
}

const deleteTag = async (req, res) => {
  const id = req.params.tag_id;
  try {
    const tag = await Tag.findByIdAndDelete(id);
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    } else res.json(tag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTagById = async (req, res) => {
  const id = req.params.tag_id;
  try {
    const tag = await Tag.findById(id);
    if (!tag) {
      res.status(404).json({ message: "Tag not found" });
    } else res.json(tag);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTagsByUser,
  createTagByUser,
  updateTag,
  deleteTag,
  getTagById,
};
