var express = require('express')
var router = express.Router()
var passport = require('passport')
var Hospital = require("../../controllers/Hospital");


router.get('/',(req,res)=>{
    Hospital.getHospitais()
              .then(dados => {res.json(dados)})
              .catch(erro => res.status(500).send('Erro na obtenção de hospitais: '  + erro))
})

router.get('/:id',(req,res)=>{
    Hospital.getHospitalID(req.params.id)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção do hospital: ' + erro))    
})