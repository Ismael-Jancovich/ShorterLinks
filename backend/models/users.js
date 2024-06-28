'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Galery.belongsTo(models.galery, { foreignKey: "id_galery" })
    }
  }
  users.init({
    id_users: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    id_galery: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "galery",
        key: "id_galery"
    }},
       
    username: DataTypes.STRING(15),
    mail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
 
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};



/*
INT AUTO_INCREMENT PRIMARY KEY 
id_galery INT,
username VARCHAR(255) NOT NULL,
password VARCHAR(255),
mail VARCHAR(255),*/