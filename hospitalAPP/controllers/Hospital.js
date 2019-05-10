var Hospital = require("./associations").Hospital;

module.exports.getHospitalByNome = async nome => {
  var result;
  await Hospital.findOne({
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

module.exports.getHospitalByID = async id => {
  var result;
  await Hospital.findOne({
    where: {
      idHospital: id
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

module.exports.addHospital = async function(newHospital) {
  var result;

  await Hospital.create({
    nome: newHospital.nome,
    telemovel: newHospital.telemovel
  })
    .then(() =>
      Hospital.findOrCreate({
        where: {
          nome: newHospital.nome
        }
      })
    )
    .then(user => {
      result = user;
    })
    .catch(err => {
      result = err;
    });
  return result;
};
