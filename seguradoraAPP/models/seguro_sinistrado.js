/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('seguro_sinistrado', {
        Seguro_idSeguro: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'seguro',
                key: 'idSeguro'
            }
        },
        Sinistrado_nif: {
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'sinistrado',
                key: 'nif'
            }
        }
    }, {
        tableName: 'seguro_sinistrado'
    });
};