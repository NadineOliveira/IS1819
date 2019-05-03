var db = require("../databaseConfiguration/config");
const Utilizador = db.import("../models/Utilizador");
const Utente = db.import("../models/Utente");
const Tratamento = db.import("../models/Tratamento");
const Sinistrado = db.import("../models/Sinistrado");
const Seguro = db.import("../models/Seguro");
const Seguro_Sinistrado = db.import("../models/Seguro_Sinistrado");
const Seguradora = db.import("../models/Seguradora");
const Relatorio_Medico = db.import("../models/Relatorio_Medico");
const Participacao = db.import("../models/Participacao");
const Medico = db.import("../models/Medico");
const Hospital = db.import("../models/Hospital");
const Factura = db.import("../models/Factura");
const Diagnostico = db.import("../models/Diagnóstico");
const Despesa_Tratamento = db.import("../models/Despesa_Tratamento");

/*
    Utilizador 1-1 Hospital
    Hospital 1-N Utilizador
    Utilizador 1-1 Seguradora
    Seguradora 1-N Utilizador
*/
Utilizador.belongsTo(Hospital, { foreignKey: "Hospital_idHospital" });
Utilizador.belongsTo(Seguradora, { foreignKey: "Seguradora_idSeguradora" });

Hospital.hasMany(Utilizador, { foreignKey: "Hospital_idHospital" });
Seguradora.hasMany(Utilizador, { foreignKey: "Seguradora_idSeguradora" });

/*--------HOSPITAL-------*/

/*
    Hospital 1-N Medico
    Medico 1-1 Hospital
*/
Hospital.hasMany(Medico, { foreignKey: "Hospital_idHospital" });
Medico.belongsTo(Hospital, { foreignKey: "Hospital_idHospital" });

/*
    Medico 1-N Diagnostico
    Diagnostico 1-1 Medico
*/
Medico.hasMany(Diagnostico, { foreignKey: "Medico_idMedico" });
Diagnostico.belongsTo(Medico, { foreignKey: "Medico_idMedico" });

/*
    Diagnostico 1-N Tratamento
    Tratamento 1-1 Diagnostico
*/
Diagnostico.hasMany(Tratamento, { foreignKey: "Diagnóstico_idDiagnóstico" });
Tratamento.belongsTo(Diagnostico, { foreignKey: "Diagnóstico_idDiagnóstico" });

/*
    Diagnostico 1-1 Factura
*/
Diagnostico.belongsTo(Factura, { foreignKey: "Diagnóstico_idDiagnóstico" });
Factura.belongsTo(Diagnostico, { foreignKey: "Diagnóstico_idDiagnóstico" });

/*
    Utente 1-N Diagnostico
    Diagnostico 1-1 Utente
*/
Utente.hasMany(Diagnostico, { foreignKey: "Utente_idUtente" });
Diagnostico.belongsTo(Utente, { foreignKey: "Utente_idUtente" });

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
exports.Diagnostico = Diagnostico;
exports.Factura = Factura;
exports.Hospital = Hospital;
exports.Medico = Medico;
exports.Participacao = Participacao;
exports.Relatorio_Medico = Relatorio_Medico;
exports.Seguradora = Seguradora;
exports.Seguro = Seguro;
exports.Seguro_Sinistrado = Seguro_Sinistrado;
exports.Sinistrado = Sinistrado;
exports.Tratamento = Tratamento;
