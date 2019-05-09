var Utente = require("./associations").Utente;
var Tratamento = require("./associations").Tratamento;
var Diagnostico = require("./associations").Diagnostico;

module.exports.getAllUtentes = async function() {
  var result = [];
  await Utente.findAll()
    .then(values => {
      for (i in values) result.push(values[i].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getUtenteById = async function(nif) {
  var result;
  await Utente.findOne({
    where: {
      nif: nif
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

module.exports.addUtente = async function(newUtente) {
  var result;
  await Utente.create({
    nif: newUtente.nif,
    nome: newUtente.nome,
    data_nascimento: newUtente.data_nascimento,
    telemovel: newUtente.telemovel
  })
    .then(user => {
      result = user;
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getTratamentosByUtente = async function(id) {
  var result = [];
  await Utente.findAll({
    where: { nif: id },
    include: [
      {
        model: Diagnostico,
        required: true,
        include: [
          {
            model: Tratamento,
            required: true
          }
        ]
      }
    ]
  })
    .then(values => {
      for (i in values) result.push(values[i].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};
