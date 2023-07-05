const express = require("express");
const router = express.Router();

const livrosController = require("../controllers/livrosControllers")
// const userController = require("../controllers/userControllers");
// const authController = require("../controllers/authControllers");

// const { checkAuth } = require("../middlewares/auth");

//rotas comuns
router.get("/lista", livrosController.exibeTodos)
router.post("/novolivro", livrosController.cadastraLivro)
router.patch("/editalivro/:id", livrosController.alteraLivro)
router.delete("/deletalivro/:id", livrosController.deletaLivro)

//rotas de autenticação
//router.get("/login", authcontroller.login)

module.exports = router;