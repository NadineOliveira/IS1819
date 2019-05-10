/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "tratamento",
    {
      idTratamento: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
          model: "diagnóstico",
          key: "idDiagnóstico"
        }
      },
      factura_idFactura: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "factura",
          key: "idFactura"
        }
      }
    },
    {
      tableName: "tratamento"
    }
  );
};
