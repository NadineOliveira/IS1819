/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sinistrado', {
    nif: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    data_nasc: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telemovel: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'sinistrado'
  });
};
