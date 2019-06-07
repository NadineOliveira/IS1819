var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')

router.get('/',(req,res) =>{
    axios.get('http://localhost:7004/api/participacoes/'+req.query.nome)
          .then(dados => {
                res.render('home',{participacoes: dados.data,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem das Participacoes: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Participacoes"})
        })
    })

router.get('/participacao',(req,res)=>{
    res.render('participacao',{nome:req.query.nome})
})

router.post('/participacao',(req,res) =>{
    var pedido = {
            nif: req.body.nif,
            nome_seguradora: req.query.nome,
            estado: false,
            nome_hospital: req.body.nome_hospital,
            nr_processo: req.body.nr_processo,
            data_acidente: req.body.data_acidente,
            tipo_acidente: req.body.tipo_acidente,
            idSeguro: req.body.idSeguro,
    }
    axios.post('http://localhost:7004/api/participacoes/'+req.query.nome,req.body)
         .then(() => {res.redirect('http://localhost:7004/participacoes?nome='+req.query.nome)})
         .catch(erro => {
            console.log('Erro na inserção da Participação: ' + erro)
            res.render('error', {error: erro, message: "Erro na inserção da Participação "})
        })
    axios.post('http://localhost:8004/pedidos?nome=' +req.body.nome_hospital,pedido)
        .then(() => {console.log('Pedido efectuado')}) 
        .catch(erro => {console.log(erro)})
})


router.post('/resposta',(req,res) =>{
    console.log(req.body)
    res.redirect('http://localhost:7004/participacoes?nome=' + req.body.nome_seguradora)
})

router.post('/resposta/estado',async (req,res) =>{
    if(req.body.pedido.estado == true){
        await axios.post('http://localhost:7004/api/participacoes/resposta/estado',req.body)
         .then(() => {
                console.log(req.body)
                res.redirect('http://localhost:7004/participacoes?nome='+req.body.pedido.nome_seguradora)
          })
         .catch(erro => {
             console.log('Erro na atualização da Participação: ' + erro)
             res.render('error', {error: erro, message: "Erro na atualização da Participação "})
        })
    }
    else{
        console.log(req.body)
        res.redirect('http://localhost:7004/participacoes?nome='+req.body.pedido.nome_seguradora)
    }
})

module.exports = router;