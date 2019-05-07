/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "relatorio_medico",
    {
      idRelatorio_Medico: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
          model: "participacao",
          key: "nr_processo"
        }
      }
    },
    {
      tableName: "relatorio_medico"
    }
  );
};
