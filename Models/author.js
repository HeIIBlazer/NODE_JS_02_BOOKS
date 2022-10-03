const {Sequelize} = require('sequelize')
const db = require('../database')

const Author = db.define('Author',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name:{
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    timestamp:false
}
   
);

module.exports = Author