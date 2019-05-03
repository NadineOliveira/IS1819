/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Factura', {
    idFactura: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preco: {
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
    tableName: 'Factura'
  });
};
