/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Relatorio_Medico', {
    idRelatorio_Medico: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nome_medico: {
      type: DataTypes.STRING(100),
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
    tableName: 'Relatorio_Medico'
  });
};
