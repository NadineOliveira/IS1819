var express = require("express");
var router = express.Router();
var passport = require("passport");
var Utente = require("../../controllers/Utente");

router.get("/", (req, res) => {
  Utente.getAllUtentes()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro =>
      res.status(500).send("Erro na obtenção dos utentes: " + erro)
    );
});

router.post("/", (req, res) => {
  Utente.addUtente(req.body)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(500).send("Erro na inserção do utente: " + erro));
});

router.get("/:id", (req, res) => {
  Utente.getUtenteById(req.params.id)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).send("Erro na obtenção do utente: " + erro));
});

router.get("/diagnosticos/:id", (req, res) => {
  Utente.getTratamentosByUtente(req.params.id)
    .then(dados => res.json(dados))
    .catch(erro =>
      res.status(500).send("Erro na obtenção de Tratamentos: " + erro)
    );
});

module.exports = router;
