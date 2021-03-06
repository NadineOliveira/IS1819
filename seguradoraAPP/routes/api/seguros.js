var express = require('express')
var router = express.Router()
var passport = require('passport')
var Seguro = require("../../controllers/Seguro");

router.get('/',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Seguro.getAllSeguros()
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção dos seguros: ' + erro))    
})

router.post('/',passport.authenticate('jwt',{session:false}),(req,res) =>{
    Seguro.addSeguro(req.body)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na inserção de seguro: ' + erro))
})

router.get('/participacoes/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Seguro.getParticipacoesOfSeguro(req.params.id)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção das participacoes do seguro: ' + erro))    
})

router.get('/tipo/:tipo',passport.authenticate('jwt',{session:false}),(req,res)=>{
    Seguro.getAllSegurosByTipo(req.params.tipo)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção do seguro: ' + erro))    
})


module.exports = router;