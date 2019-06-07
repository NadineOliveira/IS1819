var db = require("../databaseConfiguration/config");
const Utilizador = db.import("../models/utilizador");
const Utente = db.import("../models/utente");
const Tratamento = db.import("../models/tratamento");
const Medico = db.import("../models/medico");
const Hospital = db.import("../models/hospital");
const Factura = db.import("../models/factura");
const Diagnostico = db.import("../models/diagnóstico");
const Pedido = db.import("../models/Pedido");

/*
    Utilizador 1-1 Hospital
    Hospital 1-N Utilizador
*/
Utilizador.belongsTo(Hospital, { foreignKey: "Hospital_idHospital" });

Hospital.hasMany(Utilizador, { foreignKey: "Hospital_idHospital" });

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
Factura.hasMany(Tratamento, { foreignKey: "factura_idFactura" });
Tratamento.belongsTo(Factura, { foreignKey: "factura_idFactura" });

/*
    Utente 1-N Diagnostico
    Diagnostico 1-1 Utente
*/
Utente.hasMany(Diagnostico, { foreignKey: "Utente_nif" });
Diagnostico.belongsTo(Utente, { foreignKey: "Utente_nif" });

/*
    Hospital 1-N Pedido
    Pedido 1-1 Hospital
*/

Hospital.hasMany(Pedido, { foreignKey: "hospital_pedido" });
Pedido.belongsTo(Hospital, { foreignKey: "hospital_pedido" });

exports.Diagnostico = Diagnostico;
exports.Factura = Factura;
exports.Hospital = Hospital;
exports.Medico = Medico;
exports.Tratamento = Tratamento;
exports.Utilizador = Utilizador;
exports.Utente = Utente;
exports.Pedido = Pedido;
