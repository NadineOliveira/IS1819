/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('seguro', {
        idSeguro: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_seguro: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Seguradora_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'seguradora',
                key: 'idSeguradora'
            }
        }
    }, {
        tableName: 'seguro'
    });
};