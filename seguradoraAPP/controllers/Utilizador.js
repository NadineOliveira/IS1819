var Utilizador = require("./associations").Utilizador;
var bcrypt = require("bcrypt");

module.exports.getUtilizadorID = async email => {
  var result;
  await Utilizador.findOne({
    where: {
      email: email
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

module.exports.isValidPassword = async (email, p) => {
  var utilizador = await this.getUtilizadorID(email);

  if (!utilizador) {
    return -2;
  }

  var compare = await bcrypt.compare(p, utilizador.password);

  if (!compare) {
    return -1;
  }

  return utilizador;
};
