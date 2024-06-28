'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class galery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  galery.init({
    id_galery:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    urls: DataTypes.STRING(255),
    transform_url: DataTypes.STRING(255)
  }, {
    sequelize,
    modelName: 'galery',
  });
  return galery;
};

/*    id_galery INT AUTO_INCREMENT PRIMARY KEY,
    urls VARCHAR(255),
    transform_url VARCHAR(255)
*/