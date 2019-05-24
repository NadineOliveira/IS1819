var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')

router.get('/',(req,res) =>{
    axios.get('http://localhost:7004/api/seguros/')
          .then(dados => {
            console.log(dados.data)
            res.render('seguros',{seguros: dados.data})
        })
        .catch(erro => {
            console.log('Erro na listagem das Participacoes: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Participacoes"})
        })
    })

module.exports = router;