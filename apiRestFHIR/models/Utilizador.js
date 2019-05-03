/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Utilizador = sequelize.define('Utilizador', {
    idUtilizador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipo_entidade: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telemovel: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Seguradora_idSeguradora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Seguradora',
        key: 'idSeguradora'
      }
    },
    Hospital_idHospital: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Hospital',
        key: 'idHospital'
      }
    }
  },{
    tableName: 'Utilizador',
  });




};
