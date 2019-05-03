/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Seguro', {
    idSeguro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tipo_seguro: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Seguradora_idSeguradora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Seguradora',
        key: 'idSeguradora'
      }
    }
  }, {
    tableName: 'Seguro'
  });
};
