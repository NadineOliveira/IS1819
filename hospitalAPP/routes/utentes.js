var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')



router.get('/', (req, res) => {
    axios.get('http://localhost:8004/api/utentes/')
        .then(dados => {
            res.render('utentes', { utentes: dados.data })
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utentes: ' + erro)
            res.render('error', { error: erro, message: "Erro na listagem de Utentes" })
        })
})

router.get('/diagnosticos', (req, res) => {
    axios.get('http://localhost:8004/api/utentes/diagnosticos/' + req.query.id)
        .then(dados => {
            res.render('diagnosticos', { dados: dados.data[0].diagnósticos })
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utentes: ' + erro)
            res.render('error', { error: erro, message: "Erro na listagem de Utentes" })
        })
})


module.exports = router;