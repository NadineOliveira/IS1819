var Utilizador = require("./associations").Utilizador;
var hospitalController = require("./Hospital");
var bcrypt = require("bcrypt");

module.exports.addUtilizador = async function(newUtilizador) {
  var hash = await bcrypt.hash(newUtilizador.password, 10);
  var idHospital = await hospitalController.getHospitalID(
    newUtilizador.Hospital_idHospital
  );
  console.log(idHospital.idHospital);
  var result;

  await Utilizador.create({
    nome: newUtilizador.nome,
    password: hash,
    email: newUtilizador.email,
    username: newUtilizador.username,
    tipo_entidade: newUtilizador.tipo_entidade,
    telemovel: newUtilizador.telemovel,
    Hospital_idHospital: idHospital
  })
    .then(([ax, created]) => {
      result = ax;
    })
    .catch(err => {
      result = err;
    });
  return result;
};

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
