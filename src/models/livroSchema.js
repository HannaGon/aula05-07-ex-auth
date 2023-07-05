const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

module.exports=mongoose.model('livro', livroSchema);