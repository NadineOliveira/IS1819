/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "factura",
    {
      idFactura: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      preco: {
        type: "DOUBLE",
        allowNull: false
      },
      Diagnóstico_Factura: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "diagnóstico",
          key: "idDiagnóstico"
        }
      }
    },
    {
      tableName: "factura"
    }
  );
};
