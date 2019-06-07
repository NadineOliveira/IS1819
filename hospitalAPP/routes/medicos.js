var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')



router.get('/',passport.authenticate('jwt',{session:false}),(req,res) =>{
    axios.get('http://localhost:8004/api/medicos/',{ headers: {"Authorization" : req.session.token}})
          .then(dados => {
            res.render('medicos',{medicos: dados.data,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utentes: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Utentes"})
        })
    })

module.exports = router;