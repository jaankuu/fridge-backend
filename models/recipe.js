'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsTo(models.user)
    }
  };
  recipe.init({
    userId: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      } 
    },
    recipeId: { type: DataTypes.STRING, allowNull: false },
    stars: { type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};