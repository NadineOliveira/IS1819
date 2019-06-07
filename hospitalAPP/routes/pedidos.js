var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')




router.get('/',(req,res) =>{
    axios.get('http://localhost:8004/api/pedidos/'+ req.query.nome)
          .then(dados => {
            res.render('home',{pedidos: dados.data,nome: req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Pedidos: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Pedidos"})
        })
    })



router.post('/',(req,res)=>{
    axios.post('http://localhost:8004/api/pedidos/'+req.body.nr_processo,req.body)
         .then(async(dados) =>{ 
            await axios.post('http://localhost:7004/participacoes/resposta',dados.data)
                        .then(() => res.redirect('http://localhost:8004/pedidos?nome='+ req.query.nome))
                        .catch(erro => {
                            console.log('Erro na listagem dos Pedidos: ' + erro)
                            res.render('error', {error: erro, message: "Erro na listagem de Pedidos"})
                })
        })
         .catch(erro => {
            console.log('Erro na listagem dos Pedidos: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Pedidos"})
         })
})

router.post('/resposta/estado',async (req,res) => {
    axios.post('http://localhost:8004/api/pedidos/resposta/estado',req.body)
         .then(async (dados) =>{
            await axios.post('http://localhost:7004/participacoes/resposta/estado',dados.data)
                        .then(() => {
                            res.redirect('http://localhost:8004/pedidos?nome='+ dados.data.pedido.nome_hospital)})
                        .catch(erro => {
                            console.log('Erro na listagem dos Pedidos: ' + erro)
                            res.render('error', {error: erro, message: "Erro na listagem de Pedidos"})
                })
         })
         .catch(erro => {
            console.log('Erro na atualização do Pedido: ' + erro)
            res.render('error', {error: erro, message: "Erro na atualização do Pedido"})
         })
})

module.exports = router;