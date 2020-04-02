const Sequelize = require("sequelize");
require('dotenv').config();

//console.log(process.env.host, process.env.user, process.env.database, process.env.password)

module.exports = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: "mysql",
    host: process.env.host,
    define: {
      timestamps: false
    }
  });
