const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newUser = new Schema({
    nome: String,
    email: String,
    telefone: Number
},
{
    timestamps: true
})

var User = mongoose.model("User", newUser);

module.exports = User;