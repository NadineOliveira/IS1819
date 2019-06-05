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