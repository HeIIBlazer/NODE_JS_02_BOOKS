const {Sequelize} = require('sequelize')
const db = require('../database')

const Category = db.define('Category',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }


}, {
    timestamp:false
}
   
);

module.exports = Category