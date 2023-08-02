import userController from "../controller/userController";
const express = require("express");
const router = express.Router();

router.get('/users', (userController.listUsers));
router.post('/users', (userController.createUser));
router.put('/user/:idUser', (userController.editUser));
router.delete('/user/:idUser', (userController.deleteUser));

export default router;