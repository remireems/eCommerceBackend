// import important parts of sequelize library
const { Model, DataTypes, DECIMAL, NUMBER } = require('sequelize')
// import our database connection from config.js
const sequelize = require('../config/connection')
// import category model
const { Category } = require('./Category')

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      isDecimal: true,
      // validate: {
      //   isDecimal: true,
      //   DECIMAL: true
      // }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      isNumeric: true,
      // validate: {
      //   isNumeric: true,
      //   NUMBER: true
      // }
    },
    category_id: {
      type: DataTypes.STRING,
      references: {
        model: Category,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
)

module.exports = Product
