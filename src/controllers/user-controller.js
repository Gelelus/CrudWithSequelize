const service = require("../services/user-service");
class UserController {
  constructor() {}
  addUser = async (req, res) => {
    try {
      const result = await service.add(req.body); // age password login
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  deleteUser = async (req, res) => {
    try {
      await service.del(req.params.id);
      res.status(201).send();
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      await service.update(req.body);
      res.status(201).send();
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  getUser = async (req, res) => {
    try {
      const result = await service.get(req.params.id);
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  getAllUser = async (req, res) => {
    try {
      const result = await service.getAll();
      res.send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  login = async (req, res) => {
    try {
      const result = await service.login(req.body); // password + name
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
  logout = async (req, res) => {
    try {
      res.send({ responce: "successfully logout" });
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  addPetToUser = async (req, res) => {                // Добавления питомца
    try {
      const result = await service.addPet(req.body); // name id
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };

  getUserWithPets = async (req, res) => {           //получение всех питомцов пользователя
    try {
      const result = await service.getPets(req.params.id);
      res.status(201).send(result);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  };
}

module.exports = UserController;
