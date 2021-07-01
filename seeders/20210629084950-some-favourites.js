'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          userId: 1,
          recipeId: "b79327d05b8e5b838ad6cfd9576b30b6",
          recipePic: "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          recipeName: "CHICKEN VESUVIO",
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: "a7c379c59775dd0c7c88710f7fecff81",
          recipeName: "Chicken Stew",
          recipePic: "https://www.edamam.com/web-img/74b/74bfb16655500083c4af92bcf45889f7.jpg",
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: "82b4654754ece8d2ed79d74aa3cb9fcf",
          recipeName: "Perfect Corn Soup",
          recipePic: "https://www.edamam.com/web-img/a33/a332121eaa60a84c93174a5ee54e06b2.jpg",
          stars: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: "508202da876740c23d6a8a1402c59cb0",
          recipeName: "Toasted Nori Mayonnaise",
          recipePic: "https://www.edamam.com/web-img/561/5619d4681e40301fba67fd8cec48fe15.jpg",
          stars: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  }
};