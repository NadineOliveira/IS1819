var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')



router.get('/',(req,res) =>{
    axios.get('http://localhost:8004/api/medicos/')
          .then(dados => {
            res.render('medicos',{medicos: dados.data})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utentes: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Utentes"})
        })
    })

module.exports = router;