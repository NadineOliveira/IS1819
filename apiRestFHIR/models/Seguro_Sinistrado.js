/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Seguro_Sinistrado', {
    Seguro_idSeguro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Seguro',
        key: 'idSeguro'
      }
    },
    Sinistrado_idSinistrado: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sinistrado',
        key: 'idSinistrado'
      }
    }
  }, {
    tableName: 'Seguro_Sinistrado'
  });
};
