var express = require('express')
var router = express.Router()
var passport = require("passport");
var axios = require('axios')



router.get('/',passport.authenticate('jwt',{session:false}),(req,res) =>{
    axios.get('http://localhost:8004/api/utilizadores/',{ headers: {"Authorization" : req.session.token}})
          .then(dados => {
            res.render('utilizadores',{utilizadores: dados.data,nome:req.query.nome})
        })
        .catch(erro => {
            console.log('Erro na listagem dos Utilizadores: ' + erro)
            res.render('error', {error: erro, message: "Erro na listagem de Utilizadores"})
        })
    })

module.exports = router;