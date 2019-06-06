var express = require("express");
var router = express.Router();
var passport = require("passport");
var Pedido = require("../../controllers/Pedido");

router.get("/", (req, res) => {
  Pedido.getAllPedidos()
    .then(dados => res.json(dados))
    .catch(erro =>
      res.status(500).send("Erro na obtenção do diagnostico: " + erro)
    );
});

router.post("/", (req, res) => {
  Pedido.addPedido()
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).send('Erro na inserção do Pedido: ' + erro))
})


router.get('/:id', (req, res) => {
  var resposta = {
    erros: [],
    totalRecebidos: 1,
    totalRegistados: 1,
    totalRejeitados: 0,
  }

})


module.exports = router;