/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('utilizador', {
        email: {
            type: DataTypes.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
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
        Hospital_idHospital: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'hospital',
                key: 'idHospital'
            }
        }
    }, {
        tableName: 'utilizador'
    });
};