const express = require('express')

const auth = require('../middleware/auth')
const UserController = require('../controllers/user-controller')
const user_controller = new UserController()
//настрока базы в models
const router = new express.Router()

router.delete('/:id',auth, user_controller.deleteUser)

router.post('/',user_controller.addUser)                //регистрация ++
router.post('/login', user_controller.login)             //авторизация password/login

router.post('/logout',auth , user_controller.logout)     //выход 

router.put('/',auth , user_controller.updateUser)
router.get('/:id',auth , user_controller.getUser)
router.get('/',auth , user_controller.getAllUser)
module.exports = router