/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Tratamento', {
    idTratamento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    custo: {
      type: "DOUBLE",
      allowNull: false
    },
    Diagnóstico_idDiagnóstico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Diagnóstico',
        key: 'idDiagnóstico'
      }
    }
  }, {
    tableName: 'Tratamento'
  });
};
