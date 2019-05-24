var Seguro = require("./associations").Seguro;
var Participacao = require("./associations").Participacao;
var seguradoraController = require("./Seguradora")

module.exports.getAllSeguros = async function() {
    var result = [];
    await Seguro.findAll()
        .then(async values => {
            for (i in values) {
                await seguradoraController.getSeguradoraID(values[i].dataValues.Seguradora_id)
                    .then(values2 => {
                        values[i].dataValues.nomeSeguradora = values2.nome
                        result.push(values[i].dataValues)
                    })
                    .catch(err2 => {
                        result = err2
                    })
            }
        })
        .catch(err => {
            result = err;
        });
    return result;
};

module.exports.getAllSegurosByTipo = async function(tipo) {
    var result = [];
    await Seguro.findAll({
            where: {
                tipo_seguro: tipo
            }
        })
        .then(values => {
            for (aux in values) result.push(values[aux].dataValues);
        })
        .catch(err => {
            result = err;
        });
    return result;
};

module.exports.getParticipacoesOfSeguro = async function(idSeguro) {
    var result = [];
    await Seguro.findAll({
            where: { idSeguro: idSeguro },
            include: [{
                model: Participacao,
                required: true
            }]
        })
        .then(values => {
            for (i in values) result.push(values[i].dataValues);
        })
        .catch(err => {
            result = err;
        });
    return result;
};

module.exports.addSeguro = async function(newSeguro) {
    var result;

    await Seguro.create({
            tipo_seguro: newSeguro.tipo_seguro,
            descricao: newSeguro.descricao,
            Seguradora_id: newSeguradora.Seguradora_id
        })
        .then(([ax, created]) => {
            result = ax;
        })
        .catch(err => {
            result = err;
        });
    return result;
};