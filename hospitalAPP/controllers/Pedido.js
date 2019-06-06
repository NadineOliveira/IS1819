var Pedido = require("./associations").Pedido;
var hospitalController = require("./Hospital");

module.exports.getAllPedidos = async function(nome) {
    var result = [];
    await Pedido.findAll({
            where: { nome_hospital: nome }
        })
        .then(values => {
            for (i in values) result.push(values[i].dataValues);
        })
        .catch(err => {
            result = err;
        });
    return result;
};

module.exports.getPedidosOfSeguradora = async function(nomeSeguradora) {
    var result = [];
    await Pedido.findAll({
            where: {
                nome_seguradora: nomeSeguradora
            }
        })
        .then(values => {
            for (i in values) result.push(values[i].dataValues);
        })
        .catch(err => {
            result = err;
        });
    return result;
};

module.exports.addPedido = async function(newPedido) {
    var result;
    var idHospital = await hospitalController.getHospitalByNome(
        newPedido.nome_hospital
    );
    await Pedido.create({
            nif: newPedido.nif,
            nome_seguradora: newPedido.nome_seguradora,
            estado: newPedido.estado,
            nome_hospital: newPedido.nome_hospital,
            nr_processo: newPedido.nr_processo,
            data_acidente: newPedido.data_acidente,
            tipo_acidente: newPedido.tipo_acidente,
            idSeguro: newPedido.idSeguro,
            hospital_pedido: idHospital.idHospital
        })
        .then(user => {
            result = user;
        })
        .catch(err => {
            result = err;
        });
    return result;
};