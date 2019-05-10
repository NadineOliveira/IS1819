var express = require('express')
var router = express.Router()
var passport = require('passport')
var Diagnostico = require("../../controllers/Diagnostico");


router.get('/:nif',(req,res)=>{
    Diagnostico.getAllDiagnosticosByUtente(req.params.nif)
               .then(dados => res.json(dados))
               .catch(erro => res.status(500).send('Erro na obtenção do diagnostico: ' + erro))    
})

router.get('/data/:nif',(req,res)=>{
    Diagnostico.getDiagnosticoByData(req.params.nif,req.query.data)
               .then(dados => {res.json(dados)})
               .catch(erro => res.status(500).send('Erro na obtenção do diagnostico: ' + erro ))
})

