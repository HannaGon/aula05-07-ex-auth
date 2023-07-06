const express = require("express");
const router = express.Router();

const livrosController = require("../controllers/livrosControllers")
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authControllers");

const { checkAuth } = require("../middlewares/auth");

//rotas comuns
router.get("/lista", livrosController.exibeTodos)
router.post("/novolivro", livrosController.cadastraLivro)
router.patch("/editalivro/:id", checkAuth, livrosController.alteraLivro)
router.delete("/deletalivro/:id", checkAuth, livrosController.deletaLivro)

//rotas de autenticação
router.get("/listausuario", userController.exibeUsers)
router.post("/novousuario", userController.createUser);
router.post("/login", authController.login)

module.exports = router;