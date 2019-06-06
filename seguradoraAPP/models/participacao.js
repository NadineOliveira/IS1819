/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participacao', {
    nr_processo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    data_acidente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipo_acidente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    nif: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nome_seguradora: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nome_hospital: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Seguro_idSeguro: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'seguro',
        key: 'idSeguro'
      }
    }
  }, {
    tableName: 'participacao'
  });
};
