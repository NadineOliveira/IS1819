var Utilizador = require("./associations").Utilizador;
var hospitalController = require("./Hospital");
var bcrypt = require("bcrypt");

module.exports.getAllUtilizadores = async function() {
    var result = [];
    await Utilizador.findAll()
        .then(async values => {
            for (i in values) {
                await hospitalController.getHospitalByID(values[i].dataValues.Hospital_idHospital)
                    .then(values2 => {
                        console.log(values2.nome)
                        values[i].dataValues.nomeHospital = values2.nome
                        result.push(values[i].dataValues)
                    })
                    .catch(err2 => {
                        result = err2
                    })
            };
        })
        .catch(err => {
            result = err;
        });
    return result;
};


module.exports.addUtilizador = async function(newUtilizador) {
    var hash = await bcrypt.hash(newUtilizador.password, 10);
    var idHospital = await hospitalController.getHospitalByID(
        newUtilizador.Hospital_idHospital
    );
    var result;

    await Utilizador.create({
            email: newUtilizador.email,
            nome: newUtilizador.nome,
            password: hash,
            username: newUtilizador.username,
            tipo_entidade: newUtilizador.tipo_entidade,
            telemovel: newUtilizador.telemovel,
            Hospital_idHospital: idHospital.idHospital
        })
        .then(() =>
            Utilizador.findOrCreate({
                where: {
                    email: newUtilizador.email
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

module.exports.isValidPassword = async(email, p) => {
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