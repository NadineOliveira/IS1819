var Seguro = require("./associations").Seguro;
var Participacao = require("./associations").Participacao;

module.exports.getAllSeguros = async function() {
  var result = [];
  await Seguro.findAll()
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getAllSegurosByTipo = async function(tipo) {
  var result = [];
  await Seguro.findAll({
    where: {
      tipo_seguro: tipo
    }
  })
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getParticipacoesOfSeguro = async function(idSeguro) {
  var result = [];
  await Seguro.findAll({
    where: { idSeguro: idSeguro },
    include: [
      {
        model: Participacao,
        required: true
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
