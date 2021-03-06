/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Medico', {
    idMedico: {
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
      allowNull: false
    },
    area_especializacao: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Hospital_idHospital: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Hospital',
        key: 'idHospital'
      }
    }
  }, {
    tableName: 'Medico'
  });
};
