const Sequelize = require("sequelize");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  const Token = sequelize.define("token", {
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
 
  User.hasMany(Token, { onDelete: "cascade" });

  
  User.prototype.generateAuthToken = async function () {

    const user = this
    const token = jwt.sign({id: user.id.toString() }, 'expressapp');
    
    user.createToken({name:token})
    return token

}
  
  User.findByCredentials = async (login, password) => {
    
    const user = await User.findOne({where: {name: login}})

    if(!user) {
        throw new Error('Unable user')
    }
    
    const isMatch = await bcrypt.compare(password, user.password)
    
    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}
  sequelize.sync()
  
module.exports = {User ,Token}