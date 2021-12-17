const { DataTypes } = require('sequelize');  

function Tag(sequelize){
    return sequelize.define('tag', {
        name: {
            type: DataTypes.STRING(20)
        }
    })
}

module.exports = Tag;