var db = require("../databaseConfiguration/config");
const Utilizador = db.import("../models/utilizador");
const Sinistrado = db.import("../models/sinistrado");
const Seguro = db.import("../models/seguro");
const Seguro_Sinistrado = db.import("../models/seguro_sinistrado");
const Seguradora = db.import("../models/seguradora");
const Relatorio_Medico = db.import("../models/relatorio_medico");
const Participacao = db.import("../models/participacao");
const Despesa_Tratamento = db.import("../models/despesa_tratamento");

/*
    Utilizador 1-1 Seguradora
    Seguradora 1-N Utilizador
*/
Utilizador.belongsTo(Seguradora, { foreignKey: "Seguradora_idSeguradora" });
Seguradora.hasMany(Utilizador, { foreignKey: "Seguradora_idSeguradora" });

/*-------SEGURADORA-------*/

/*
    Seguradora 1-N Seguro
    Seguro 1-1 Seguradora
*/

Seguradora.hasMany(Seguro, { foreignKey: "Seguradora_idSeguradora" });
Seguro.belongsTo(Seguradora, { foreignKey: "Seguradora_idSeguradora" });

/*
    Seguro 1-N Participacao
    Participacao 1-1 Seguro
*/

Seguro.hasMany(Participacao, { foreignKey: "Seguro_idSeguro" });
Participacao.belongsTo(Seguro, { foreignKey: "Seguro_idSeguro" });

/*
    Seguro 1-N Seguro_Sinistrado
    Seguro_Sinistrado 1-1 Seguro

    Seguro_Sinistrado 1-1 Sinistrado
    Sinistrado 1-N Seguro_Sinistrado

    Seguro N-N Sinistrado
    Sinistrado N-N Seguro
*/
Seguro.hasMany(Seguro_Sinistrado, { foreignKey: "Seguro_idSeguro" });
Seguro_Sinistrado.belongsTo(Seguro, { foreignKey: "Seguro_idSeguro" });

Seguro_Sinistrado.belongsTo(Sinistrado, {
  foreignKey: "Sinistrado_idSinistrado"
});
Sinistrado.hasMany(Seguro_Sinistrado, {
  foreignKey: "Sinistrado_idSinistrado"
});

Seguro.belongsToMany(Sinistrado, {
  through: "Seguro_Sinistrado",
  foreignKey: "Sinistrado_idSinistrado"
});
Sinistrado.belongsToMany(Seguro, {
  through: "Seguro_Sinistrado",
  foreignKey: "Seguro_idSeguro"
});

/*
    Participacao 1-1 Relatorio_Medico
    
    Participacao 1-N Despesa_Tratamento
    Depesa_Tratamento 1-1 Participacao
*/

Participacao.belongsTo(Relatorio_Medico, {
  foreignKey: "Participacao_nr_processo"
});
Relatorio_Medico.belongsTo(Participacao, {
  foreignKey: "Participacao_nr_processo"
});

Participacao.hasMany(Despesa_Tratamento, {
  foreignKey: "Participacao_nr_processo"
});
Despesa_Tratamento.belongsTo(Participacao, {
  foreignKey: "Participacao_nr_processo"
});

exports.Despesa_Tratamento = Despesa_Tratamento;
exports.Participacao = Participacao;
exports.Relatorio_Medico = Relatorio_Medico;
exports.Seguradora = Seguradora;
exports.Seguro = Seguro;
exports.Seguro_Sinistrado = Seguro_Sinistrado;
exports.Sinistrado = Sinistrado;
exports.Utilizador = Utilizador;
