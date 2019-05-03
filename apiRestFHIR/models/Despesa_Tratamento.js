/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Despesa_Tratamento', {
    idDespesas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    custo: {
      type: "DOUBLE",
      allowNull: false
    },
    Participacao_nr_processo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Participacao',
        key: 'nr_processo'
      }
    }
  }, {
    tableName: 'Despesa_Tratamento'
  });
};
