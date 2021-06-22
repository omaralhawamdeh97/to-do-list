const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // slug: {
    //   type: DataTypes.STRING,
    // },
    priority: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deadlinedate: {
      type: DataTypes.DATEONLY,
    },
  });
  //   SequelizeSlugify.slugifyModel(Task, {
  //     source: ["name"],
  //   });
  return Task;
};
