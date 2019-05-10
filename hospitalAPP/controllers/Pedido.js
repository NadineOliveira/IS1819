var Pedido = require("./associations").Pedido;

module.exports.getAllPedidos = async function() {
  var result = [];
  await Pedido.findAll()
    .then(values => {
      for (i in values) result.push(values[i].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};
