var express = require('express')
var router = express.Router()
var passport = require('passport')
var Sinistrado = require("../../controllers/Sinistrado");

router.get('/',(req,res)=>{
    Sinistrado.getAllSinistrados()
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de sinistrados: ' + erro))    
})

router.post('/',(req,res) =>{
    Sinistrado.addSinistrado(req.body)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na inserção de sinistrado: ' + erro))
})

router.get('/seguros/:id',(req,res)=>{
    Sinistrado.getSegurosOfSinistrado(req.params.id)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção dos seguros do sinistrado: ' + erro))    
})


module.exports = router;