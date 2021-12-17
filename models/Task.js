const { DataTypes } = require('sequelize');

function Task(sequelize){
    return sequelize.define('task', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
}

module.exports = Task;