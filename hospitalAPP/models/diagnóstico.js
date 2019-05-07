/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "diagnóstico",
    {
      idDiagnóstico: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      area_clinica: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      Medico_idMedico: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "medico",
          key: "idMedico"
        }
      },
      Utente_nif: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
          model: "utente",
          key: "nif"
        }
      }
    },
    {
      tableName: "diagnóstico"
    }
  );
};
