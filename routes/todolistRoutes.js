const express = require("express");
const router = express.Router();

const {
  taskFetch,
  taskCreate,
  taskList,
  taskDetail,
  taskUpdate,
  taskDelete,
} = require("../controllers/todolistController");

router.param("taskId", async (req, res, next, taskId) => {
  const task = await taskFetch(taskId, next);
  if (task) {
    req.task = task;
    next();
  } else {
    const err = new Error("task Not Found");
    err.status = 404;
    next(err);
  }
});

router.post("/", taskCreate);

router.get("/", taskList);

router.get("/:taskId", taskDetail);

router.put("/:taskId", taskUpdate);

router.delete("/:taskId", taskDelete);

module.exports = router;
