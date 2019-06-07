var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')

router.get('/tratamentos',passport.authenticate('jwt',{session:false}),(req, res) => {
    axios.get('http://localhost:8004/api/diagnosticos/tratamentos/' + req.query.id,{ headers: {"Authorization" : req.session.token}})
        .then(dados => {
            res.render('tratamentos', {tratamentos: dados.data[0].tratamentos,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Tratamentos: ' + erro)
            res.render('error', { error: erro, message: "Erro na listagem de Tratamentos" })
        })
})

module.exports = router;