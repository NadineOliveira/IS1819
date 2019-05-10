/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "pedido",
    {
      idPedido: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nif: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      nome_seguradora: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      hospital_pedido: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "hospital",
          key: "idHospital"
        }
      }
    },
    {
      tableName: "pedido"
    }
  );
};
