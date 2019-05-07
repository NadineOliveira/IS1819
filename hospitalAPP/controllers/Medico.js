var Medico = require("./associations").Medico;

module.exports.getAllMedicos = async function() {
  var result = [];
  await Medico.findAll()
    .then(values => {
      for (i in values) result.push(values[i].dataValues);
    })
    .catch(err => {
      result = err;
    });
  return result;
};

module.exports.getMedicoById = async function(id) {
  var result;
  await Medico.findOne({
    where: {
      idMedico: id
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

module.exports.addMedico = async function(newMedico) {
  var result;
  var idHospital = await hospitalController.getHospitalID(
    newMedico.Hospital_idHospital
  );
  await Medico.create({
    nome: newMedico.nome,
    telemovel: newMedico.telemovel,
    area_especializacao: newMedico.area_especializacao,
    Hospital_idHospital: idHospital
  })
    .then(user => {
      result = user;
    })
    .catch(err => {
      result = err;
    });
  return result;
};
