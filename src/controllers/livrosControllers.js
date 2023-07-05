const mongoose = require("mongoose")
const livroSchema = require("../models/livroSchema")

const exibeTodos = async(req,res)=>{
    let query = { }
    try {
        const todosResultados= await livroSchema.find(query)
        res.status(200).json(todosResultados)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const cadastraLivro = async(req,res)=>{
    try {
        const { nome, autor, categoria } = req.body
        const novoLivro = new livroSchema({
            nome: nome,
            autor: autor,
            categoria: categoria
        })
        const salvaLivro = await novoLivro.save()
        res.status(201).json({
            novoLivro: salvaLivro
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const alteraLivro = async(req,res)=>{
    const { nome, autor, categoria } =req.body
    try {
        const encontraLivro = await livroSchema.findById(req.params.id)
    if (!encontraLivro){
        return res.status(404).send({
            message: "não encontrado"
        })
    }
    if(nome) encontraLivro.nome=nome
    if(autor) encontraLivro.autor=autor
    if(categoria) encontraLivro.categoria=categoria
    const salvarLivro = await encontraLivro.save()
    res.status(200).json({encontraLivro: salvarLivro})
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deletaLivro = async(req,res)=>{
    try {
        const resultadoBusca = await livroSchema.findById(req.params.id)
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
    cadastraLivro,
    alteraLivro,
    deletaLivro
}