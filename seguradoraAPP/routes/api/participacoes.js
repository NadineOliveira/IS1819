var express = require('express')
var router = express.Router()
var passport = require('passport')
var Participacao = require("../../controllers/Participacao");

router.get('/:nome',(req,res)=>{
    Participacao.getAllParticipacoes(req.params.nome)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção de participações: ' + erro))    
})


router.post('/:nome',(req,res) =>{
    Participacao.addParticipacao(req.body,req.params.nome)
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

router.post('/resposta/estado',(req,res) =>{
    Participacao.validaParticipacao(req.body.pedido.nr_processo)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na atualização da participacao: ' + erro))
})


module.exports = router;