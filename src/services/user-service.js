const User = require('../models/user')
const bcrypt = require('bcryptjs');


const add = async function (data) { 
    
    data.password = await bcrypt.hash(data.password, 8)
    return  await User.create(data)

}

const get = async function (id) {

    return await User.findByPk(id)

}

const getAll = async function () {

    return await User.findAll({raw:true})

}

const update = async function (data) {
   
   return await User.update(data, {where: {id: data.id}})//возвращает  [id]

}


const del = async function (id) {

    return await User.destroy({where: {id: id}})//возвращает  id

}

const login = async function (data) { //password login приходит 
    
    
    const user = await User.findByCredentials(data.name, data.password); //статик метод из model проверка хэша и логина
   
    const token = await user.generateAuthToken();  // запись токена в базу и его return 

    return {user, token}
  
}



module.exports = {
    add,
    get,
    update,
    del,
    getAll,
    login
}