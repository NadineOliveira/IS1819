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


module.exports = router;