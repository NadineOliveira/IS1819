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

module.exports.getSeguradoraID = async nome => {
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
