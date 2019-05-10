var Utilizador = require("./associations").Utilizador;
var seguradoraController = require("./Seguradora");
var bcrypt = require("bcrypt");

module.exports.getAllUtilizadores = async function() {
  var result = [];
  await Utilizador.findAll()
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.addUtilizador = async function(newUtilizador) {
  var hash = await bcrypt.hash(newUtilizador.password, 10);
  var idSeguradora = await seguradoraController.getSeguradoraID(
    newUtilizador.Seguradora_idSeguradora
  );
  console.log(idSeguradora.idSeguradora);
  var result;

  await Utilizador.create({
    email: newUtilizador.email,
    nome: newUtilizador.nome,
    password: hash,
    username: newUtilizador.username,
    tipo_entidade: newUtilizador.tipo_entidade,
    telemovel: newUtilizador.telemovel,
    Seguradora_idSeguradora: idSeguradora.idSeguradora
  })
    .then(() =>
      Utilizador.findOrCreate({
        where: {
          email: newUtilizador.email
        }
      })
    )
    .then(([ax, created]) => {
      result = ax;
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getUtilizadorID = async email => {
  var result;
  await Utilizador.findOne({
    where: {
      email: email
    }
  })
    .then(values => {
      result = values.dataValues;
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.isValidPassword = async (email, p) => {
  var utilizador = await this.getUtilizadorID(email);

  if (!utilizador) {
    return -2;
  }

  var compare = await bcrypt.compare(p, utilizador.password);

  if (!compare) {
    return -1;
  }

  return utilizador;
};
