const router = require('express').Router();
const User = require('../models/User');
var validator = require("email-validator");
 


router.route('/').get((req, res) => {
    User.find()
        .then(usuarios => res.json(usuarios))
        .catch(error => res.status(400).json("Error: " + error))
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then( usuario => res.json(usuario))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/adicionar').post((req, res) => {
    const novoUsuario = new User({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone 
    });
   
    const emailValid = validator.validate(req.body.email);
    if(emailValid){
        novoUsuario.save()
        .then(() => res.json("Usuário adicionado com sucesso"))
        .catch(error => res.status(400).json("Error: "+ error));
        return
    } else{
        res.json("Padrão de email inválido!");
    }
});

router.route("/editar/:id").put((req, res) => {
    User.findByIdAndUpdate(req.params.id )
     .then(usuario => {
         usuario.nome = req.body.nome,
         usuario.email = req.body.email,
         usuario.telefone = req.body.telefone
        
         const emailValid = validator.validate(req.body.email);
         if(emailValid){
            usuario.save()
         .then(() => res.json("Usuário editado com sucesso"))
         .catch(error => res.status(400).json("Error: " + error));
         return
         } else{
             res.json("Padrão de email inválido!")
         }
     })
     .catch(error => res.status(400).json("Error: "+error));
});

router.route("/remover/:id").delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
     .then(() => res.json("Usuário removido com sucesso"))
     .catch(error => res.status(400).json("Error: "+error));
});

module.exports = router;


