var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')



router.get('/',(req,res) =>{
    axios.get('http://localhost:8004/api/pedidos/')
          .then(dados => {
            console.log(dados.data)
            res.render('home',{pedidos: dados.data})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Pedidos: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Pedidos"})
        })
    })



router.post('/',(req,res)=>{
    console.log(req.body)
    axios.post('http://localhost:8004/api/pedidos/',req.body)
         .then(() =>{ res.redirect('http://localhost:8004/api/pedidos/')})
         .catch(erro => {
            console.log('Erro na listagem dos Pedidos: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Pedidos"})
         })
})

router.post('/resposta',(req,res) => {

})

module.exports = router;