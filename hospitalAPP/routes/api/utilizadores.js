var express = require('express')
var router = express.Router()
var passport = require('passport')
var Utilizador = require("../../controllers/Utilizador");


router.get('/',(req,res)=>{
    Utilizador.getAllUtilizadores()
              .then(dados => {res.json(dados)})
              .catch(erro => res.status(500).send('Erro na obtenção de utilizadores '+ erro))
})

router.post('/',(req,res)=>{
    Utilizador.addUtilizador(req.body)
              .then(dados => {res.json(dados)})
              .catch(erro => res.status(500).send('Erro na inserção do Utilizador: ' + erro ))
})


router.get('/:id',(req,res)=>{
    Utilizador.getUtilizadorID(req.params.id)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção do utilizador: ' + erro))    
})



module.exports = router;