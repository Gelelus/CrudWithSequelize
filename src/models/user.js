const Sequelize = require("sequelize");

require('dotenv').config();
//console.log(process.env.host, process.env.user, process.env.database, process.env.password)
const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: "mysql",
    host: process.env.host,
    define: {
      timestamps: false
    }
  });

const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
 

module.exports = User