var Sinistrado = require("./associations").Sinistrado;
var Seguro_Sinistrado = require("./associations").Seguro_Sinistrado;
var Seguro = require("./associations").Seguro;

module.exports.getAllSinistrados = async function() {
  var result = [];
  await Sinistrado.findAll()
    .then(values => {
      for (aux in values) result.push(values[aux].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getSegurosOfSinistrado = async function(idSinistrado) {
  var result = [];
  await Sinistrado.findAll({
    where: { nif: idSinistrado },
    include: [
      {
        model: Seguro_Sinistrado,
        required: true,
        include: [
          {
            model: Seguro,
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
