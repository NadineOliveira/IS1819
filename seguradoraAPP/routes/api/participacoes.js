var express = require('express')
var router = express.Router()
var passport = require('passport')
var Participacao = require("../../controllers/Participacao");

router.get('/',(req,res)=>{
    Participacao.getAllParticipacoes()
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de participações: ' + erro))    
})

router.post('/',(req,res) =>{
    Participacao.addParticipacao(req.body)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na inserção da participacao: ' + erro))
})

router.get('/despesas/:nproc',(req,res) =>{
    Participacao.getAllDespesasOfParticipacao(req.params.nproc)
                .then(dados => res.json(dados))
                .catch(erro => res.status(500).send('Erro na obtenção de despesas: ' + erro))
})

router.get('/relatorios/:nproc',(req,res)=>{
    Participacao.getAllRelatoriosOfParticipacao(req.params.nproc)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de relatorios: ' + erro))    
})


module.exports = router;