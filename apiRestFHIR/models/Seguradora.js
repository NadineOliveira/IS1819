/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Seguradora', {
    idSeguradora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telemovel: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'Seguradora'
  });
};
