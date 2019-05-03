/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Utente', {
    idUtente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telemovel: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'Utente'
  });
};
