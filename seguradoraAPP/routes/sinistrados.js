var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')

router.get('/',passport.authenticate('jwt',{session:false}),(req,res) =>{
    axios.get('http://localhost:7004/api/sinistrados/',{ headers: {"Authorization" : req.session.token}})
          .then(dados => {
            res.render('sinistrados',{sinistrados: dados.data,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem das Participacoes: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Participacoes"})
        })
    })

module.exports = router;