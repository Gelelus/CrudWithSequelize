const sequelize = require('../config/database');
const Sequelize = require("sequelize");

  const Pet = sequelize.define("pet", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  module.exports = Pet