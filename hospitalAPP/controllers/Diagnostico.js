var Diagnostico = require("./associations").Diagnostico;

module.exports.getDiagnosticoByData = async function(nif, data) {
  var result;
  await Diagnostico.findOne({
    where: {
      Utente_nif: nif,
      data: data
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

var Utente = require("./associations").Utente;

module.exports.getAllDiagnosticosByUtente = async function(id) {
  var result = [];
  await Diagnostico.findAll({
    where: {
      Utente_nif: id
    }
  })
    .then(values => {
      for (i in values) result.push(values[i].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};
