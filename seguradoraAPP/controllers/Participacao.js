var Participacao = require("./associations").Participacao;
var Despesa_Tratamento = require("./associations").Despesa_Tratamento;
var Relatorio_Medico = require("./associations").Relatorio_Medico;

module.exports.getAllParticipacoes = async function() {
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

module.exports.validaParticipacao = async function(nr_proc) {
  var result;
  await Participacao.update(
    { validada: 1 },
    { where: { nr_processo: nr_proc } }
  )
    .then(() => {
      result = Participacao.findOne({ where: { nr_processo: nr_proc } });
    })
    .catch(err => (result = err));
  return result;
};

module.exports.addParticipacao = async function(newParticipacao) {
  var result;

  await Participacao.create({
    nr_processo: newParticipacao.nr_processo,
    data_acidente: newParticipacao.data_acidente,
    tipo_acidente: newParticipacao.tipo_acidente,
    validada: newParticipacao.validada,
    Seguro_idSeguro: newParticipacao.Seguro_idSeguro
  })
    .then(() =>
      Participacao.findOrCreate({
        where: {
          nr_processo: newUtilizador.nr_processo
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

module.exports.addDespesa = async function(newDespesa) {
  var result;

  await Despesa_Tratamento.create({
    nome: newDespesa.nome,
    custo: newDespesa.custo,
    Participacao_nr_processo: newDespesa.Participacao_nr_processo
  })
    .then(([ax, created]) => {
      result = ax;
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.addRelatorio = async function(newRelatorio) {
  var result;

  await Relatorio_Medico.create({
    descricao: newRelatorio.descricao,
    nome_medico: newRelatorio.nome_medico,
    Participacao_nr_processo: newRelatorio.Participacao_nr_processo
  })
    .then(([ax, created]) => {
      result = ax;
    })
    .catch(err => {
      result = err;
    });
  return result;
};
