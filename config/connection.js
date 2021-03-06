require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || `mysql://root:${process.env.SECRET}@localhost:3306/ecommerce_db`)

module.exports = sequelize
