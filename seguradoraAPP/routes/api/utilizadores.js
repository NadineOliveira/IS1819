var express = require('express')
var router = express.Router()
var passport = require('passport')
var Utilizador = require("../../controllers/Utilizador");

router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Utilizador.getAllUtilizadores()
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de utilizadores: ' + erro))    
})

router.post('/',passport.authenticate('jwt',{session:false}),(req,res) =>{
    Utilizador.addUtilizador(req.body)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na inserção de utilizadores: ' + erro))
})

router.get('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Utilizador.getUtilizadorID(req.params.id)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção do utilizador: ' + erro))    
})


module.exports = router;