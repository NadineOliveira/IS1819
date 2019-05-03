/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hospital', {
    idHospital: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telemovel: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'Hospital'
  });
};
