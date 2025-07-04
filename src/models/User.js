const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        "Users",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            img: {
                type: DataTypes.STRING
            },
            idade: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            biografia: {
                type: DataTypes.STRING,
                allowNull: false
            },
            endereco: {
                type: DataTypes.JSON,
                allowNull: true
            }

        }
    )
}

