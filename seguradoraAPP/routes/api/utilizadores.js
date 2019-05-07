var express = require('express')
var router = express.Router()
var passport = require('passport')
var Utilizador = require("../../controllers/Utilizador");


router.get('/:utilizador',(req,res)=>{
    Utilizador.getUtilizadorID(req.params.utilizador)
              .then(dados => res.json(dados))
              .catch(erro => res.status(500).send('Erro na obtenção do utilizador: ' + erro))    
})


module.exports = router;