const express = require("express");

const valid = require("../middleware/validation");
const validCreateUser = require("../dtos/create-user.dto.js");
const validLoginUser = require("../dtos/login-user.dto.js");

const auth = require("../middleware/auth");
const UserController = require("../controllers/user-controller");
const user_controller = new UserController();

const router = new express.Router();

router.delete("/:id", auth, user_controller.deleteUser);

router.post("/pet", auth, user_controller.addPetToUser); // добавить питомца
router.get("/pet/:id", auth, user_controller.getUserWithPets); // получение всех питомцов пользователя

router.post("/", valid(validCreateUser), user_controller.addUser); //регистрация ++
router.post("/login", valid(validLoginUser), user_controller.login); //авторизация password/login

router.post("/logout", auth, user_controller.logout); //выход

router.put("/", auth, user_controller.updateUser);
router.get("/:id", auth, user_controller.getUser);
router.get("/", auth, user_controller.getAllUser);
module.exports = router;
