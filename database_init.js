const { Sequelize } = require('sequelize');
const db = require('./database')
const Category = require('./Models/category')
const Author = require('./Models/Author')
const Book = require('./Models/Book')

Category.sync({force: true})
Author.sync({force: true})
Book.sync({force: true})