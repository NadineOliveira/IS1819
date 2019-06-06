var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')

router.get('/',(req,res) =>{
    axios.get('http://localhost:7004/api/participacoes/')
          .then(dados => {
            res.render('home',{participacoes: dados.data})
        })
        .catch(erro => {
            console.log('Erro na listagem das Participacoes: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Participacoes"})
        })
    })

router.get('/participacao',(req,res)=>{
    res.render('participacao')
})

router.post('/participacao',(req,res) =>{
    axios.post('http://localhost:8004/pedidos',req.body)
         .then(() => {console.log('Pedido efectuado')}) 
         .catch(erro => {console.log(erro)})
    axios.post('http://localhost:7004/api/participacoes/',req.body)
         .then(() => {res.redirect('http://localhost:7004/participacoes/')})
         .catch(erro => {
            console.log('Erro na inserção da Participação: ' + erro)
            res.render('error', {error: erro, message: "Erro na inserção da Participação "})
        })
})

module.exports = router;