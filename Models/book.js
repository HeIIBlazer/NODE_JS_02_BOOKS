const {Sequelize} = require('sequelize')
const db = require('../database')

const Book = db.define('Book',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pageCount:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    publishDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    shortDescription:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.STRING,
        allowNull: false
    },


}, {
    timestamp:false
});

module.exports = Book