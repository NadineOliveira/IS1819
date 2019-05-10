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

module.exports.addDiagnostico = async function(newDiagnostico) {
  var result;

  await Diagnostico.create({
    descricao: newDiagnostico.descricao,
    area_clinica: newDiagnostico.area_clinica,
    data: newDiagnostico.data,
    Medico_idMedico: newDiagnostico.Medico_idMedico,
    Utente_nif: newDiagnostico.Utente_nif
  })
    .then(() =>
      Diagnostico.findOrCreate({
        where: {
          data: newDiagnostico.data,
          Utente_nif: newDiagnostico.Utente_nif
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
