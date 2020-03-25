const User = require('../models/user');


const add = async function (req) {
    
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


module.exports = {
    add,
    get,
    update,
    del,
    getAll
}