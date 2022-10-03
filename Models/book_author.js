const {Sequelize} = require('sequelize')
const db = require('../database')

const Book_Author = db.define('Book_Author',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    book_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }


}, {
    timestamp:false
}
   
);

module.exports = Category