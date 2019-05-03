/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Diagnóstico', {
    idDiagnóstico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
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
        model: 'Medico',
        key: 'idMedico'
      }
    },
    Utente_idUtente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Utente',
        key: 'idUtente'
      }
    }
  }, {
    tableName: 'Diagnóstico'
  });
};
