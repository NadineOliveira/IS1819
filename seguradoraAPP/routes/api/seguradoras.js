var express = require('express')
var router = express.Router()
var passport = require('passport')
var Seguradora = require("../../controllers/Seguradora");

router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Seguradora.getAllSeguradoras()
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de utilizadores: ' + erro))    
})

router.post('/',passport.authenticate('jwt',{session:false}),(req,res) =>{
    Seguradora.addSeguradora(req.body)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na inserção de seguradora: ' + erro))
})

router.get('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Seguradora.getSeguradoraID(req.params.id)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de seguradora: ' + erro))    
})

router.get('/nome/:nome',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Seguradora.getSeguradoraByNome(req.params.nome)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de seguradora: ' + erro))    
})


module.exports = router;