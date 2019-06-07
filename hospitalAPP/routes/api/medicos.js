var express = require("express");
var router = express.Router();
var passport = require("passport");
var Medico = require("../../controllers/Medico");

router.get("/",passport.authenticate('jwt',{session:false}),(req, res) => {
  Medico.getAllMedicos()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro =>
      res.status(500).send("Erro na obtenção dos médicos: " + erro)
    );
});

router.post("/",passport.authenticate('jwt',{session:false}),(req, res) => {
  Medico.addMedico(req.body)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(500).send("Erro na inserção do médico: " + erro));
});

router.get("/:id", (req, res) => {
  Medico.getMedicoById(req.params.id)
    .then(dados => res.json(dados))
    .catch(erro => res.status(500).send("Erro na obtenção do médico: " + erro));
});
module.exports = router;
