const User = require('../models/user').User;
const Token = require('../models/user').Token;
const bcrypt = require('bcryptjs');


const add = async function (req) { 
    
    req.password = await bcrypt.hash(req.password, 8)
    return  await User.create(req)

}

const get = async function (req) {

    return await User.findByPk(req)

}

const getAll = async function () {

    return await User.findAll({raw:true})

}

const update = async function (req) {
   
   return await User.update(req, {where: {id: req.id}})//возвращает  [id]

}


const del = async function (req) {

    return await User.destroy({where: {id: req}})//возвращает  id

}

const login = async function (req) { //password login приходит 
    
    
    const user = await User.findByCredentials(req.name, req.password); //статик метод из model проверка хэша и логина
   
    const token = await user.generateAuthToken();  // запись токена в базу и его return 

    return {user, token}
  
}
const logout = async function(req){

    await Token.destroy({where: {Userid: req.user.id}});
    
}


module.exports = {
    add,
    get,
    update,
    del,
    getAll,
    login,
    logout
}