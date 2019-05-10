var Seguradora = require("./associations").Seguradora;

module.exports.getAllSeguradoras = async function() {
  var result = [];
  await Seguradora.findAll()
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getSeguradoraByNome = async nome => {
  var result;
  await Seguradora.findOne({
    where: {
      nome: nome
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

module.exports.getSeguradoraID = async is => {
  var result;
  await Seguradora.findOne({
    where: {
      idSeguradora: id
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

module.exports.addSeguradora = async function(newSeguradora) {
  var result;

  await Seguradora.create({
    nome: newSeguradora.nome,
    telemovel: newSeguradora.telemovel
  })
    .then(() =>
      Seguradora.findOrCreate({
        where: {
          nome: newSeguradora.nome
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
