const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const app = express();
const todolistRoutes = require("./routes/todolistRoutes");
app.use(express.json());

app.use(cors());
app.use("/tasks", todolistRoutes);

app.use((req, res, next) => {
  const err = new Error("Path Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});
db.sequelize.sync();
app.listen(8000, () => {
  console.log("application running on 8000 port");
});
