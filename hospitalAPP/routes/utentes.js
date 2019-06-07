var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')



router.get('/',passport.authenticate('jwt',{session:false}),(req, res) => {
    axios.get('http://localhost:8004/api/utentes/',{ headers: {"Authorization" : req.session.token}})
        .then(dados => {
            res.render('utentes', { utentes: dados.data,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utentes: ' + erro)
            res.render('error', { error: erro, message: "Erro na listagem de Utentes" })
        })
})

router.get('/diagnosticos',passport.authenticate('jwt',{session:false}),(req, res) => {
    axios.get('http://localhost:8004/api/utentes/diagnosticos/' + req.query.id,{ headers: {"Authorization" : req.session.token}})
        .then(dados => {
            res.render('diagnosticos', { dados: dados.data[0].diagnósticos,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utentes: ' + erro)
            res.render('error', { error: erro, message: "Erro na listagem de Utentes" })
        })
})


module.exports = router;