const mongoose = require("mongoose")
const userSchema = require("../controllers/userSchema")
const e = require("express")

const exibeTodos = async(req,res)=>{
    let query = { }
    try {
        const todosResultados= await userSchema.find(query)
        res.status(200).json(todosResultados)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const cadastroUsuario = async(req,res)=>{
    try {
        const { nome, email, password, createdAt } = req.body
        const novoLivro = new userSchema({
            nome: nome,
            email: email,
            password: password,
            createdAt: createdAt,
        })
        const salvaUsuario = await novousuario.save()
        res.status(201).json({
            novoUsuario: salvaUsuario
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const alteraUsuario = async(req,res)=>{
    const { nome, email, password, createdAt } =req.body
    try {
        const encontraUsuario = await userSchema.findById(req.params.id)
    if (!encontraUsuario){
        return res.status(404).send({
            message: "usuário não encontrado"
        })
    }
    if(nome) encontraUsuario.nome=nome
    if(email) encontraUsuario.email=email
    if(password) encontraUsuario.password=password
    if(createdAt) encontraUsuario.createdAt=createdAt
    const salvarUsuario = await encontraUsuario.save()
    res.status(200).json({encontraUsuario: salvarUsuario})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletaUsuario = async(req,res)=>{
    try {
        const resultadoBusca = await userSchema.findById(req.params.id)
        await resultadoBusca.deleteOne()
        res.status(200).json({
            message: "Livro Deletado"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports={
    exibeTodos,
    cadastroUsuario,
    alteraUsuario,
    deletaUsuario
}