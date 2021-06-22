const { Task } = require("../db/models");

exports.taskFetch = async (taskId, next) => {
  try {
    const task = await Task.findByPk(taskId);
    return task;
  } catch (error) {
    next(error);
  }
};

exports.taskCreate = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

exports.taskList = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.taskDetail = async (req, res) => res.json(req.task);

exports.taskUpdate = async (req, res, next) => {
  try {
    const newTask = await req.task.update(req.body);
    res.json(newTask);
  } catch (err) {
    next(error);
  }
};

exports.taskDelete = async (req, res, next) => {
  try {
    await req.task.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};
