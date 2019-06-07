/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pedido', {
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
    estado: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    nome_hospital: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nr_processo: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    data_acidente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipo_acidente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idSeguro: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    hospital_pedido: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'hospital',
        key: 'idHospital'
      }
    }
  }, {
    tableName: 'Pedido'
  });
};
