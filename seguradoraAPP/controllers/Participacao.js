var Participacao = require("./associations").Participacao;
var Despesa_Tratamento = require("./associations").Despesa_Tratamento;
var Relatorio_Medico = require("./associations").Relatorio_Medico;

module.exports.getAllParticipacos = async function() {
  var result = [];
  await Participacao.findAll()
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getAllDespesasOfParticipacao = async function(nr_proc) {
  var result = [];
  await Sinistrado.findAll({
    where: { nr_processo: nr_proc },
    include: [
      {
        model: Despesa_Tratamento,
        required: true
      }
    ]
  })
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getAllRelatoriosOfParticipacao = async function(nr_proc) {
  var result = [];
  await Sinistrado.findAll({
    where: { nr_processo: nr_proc },
    include: [
      {
        model: Relatorio_Medico,
        required: true
      }
    ]
  })
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};
