var Hospital = require("./associations").Hospital;

module.exports.getHospitalID = async nome => {
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
