var express = require("express");
var passport = require("passport");
var jwt = require("jsonwebtoken");
var router = express.Router();
var axios = require('axios')

router.get("/", function(req, res, next) {
  res.render("login");
});

router.post("/", async (req, res, next) => {
  passport.authenticate("login", async (err, utilizador, info) => {
    try {
      if (err || !utilizador) {
        const error = new Error("An Error Occured");
        return next(error);
      }
      req.login(utilizador, { session: false }, async error => {
        if (error) return next(error);
        const myutilizador = { email: utilizador.email };
        const token = jwt.sign({ user: myutilizador }, "is_grupo7_2019");
        req.user.token = token;
        req.session.token = token;
        await axios.get('http://localhost:7004/api/seguradoras/' + utilizador.Seguradora_idSeguradora)
                   .then(dados => res.redirect("/participacoes?nome=" + dados.data.nome))
                   .catch(erro => console.log('Erro ->' + erro))
        
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});


module.exports = router;