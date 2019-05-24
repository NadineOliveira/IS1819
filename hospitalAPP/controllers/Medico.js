var Medico = require("./associations").Medico;
var Hospital = require("./Hospital")

module.exports.getAllMedicos = async function() {
  var result = [];
  await Medico.findAll()
    .then(async values => {
      for (i in values){
        await Hospital.getHospitalByID(values[i].dataValues.Hospital_idHospital)
                       .then(values2 => {
                          values[i].dataValues.nomeHospital = values2.nome
                          result.push(values[i].dataValues)
                        })
                        .catch(err2 =>{
                          result = err2
                        }) 
      };
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
    Hospital_idHospital: idHospital.idHospital
  })
    .then(user => {
      result = user;
    })
    .catch(err => {
      result = err;
    });
  return result;
};
