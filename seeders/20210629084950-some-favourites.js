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
        {
          userId: 2,
          recipeId: "465aad6a7e3d4a1dfef70e84ec3c7f2d",
          recipeName: "Marinated Peanut Tempeh",
          recipePic: "https://www.edamam.com/web-img/52b/52b786f89f7de06ba21bbb65beeebcb5",
          stars: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: "a142adbe035fe79bcd1c8e1973faa20c",
          recipeName: "Steamed Jackfruit Buns",
          recipePic: "https://www.edamam.com/web-img/1d6/1d661a64aee11b2a697069d9e86b0b95.jpg",
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          recipeId: "224ab1c7537a4793758eb05c9b057ed3",
          recipeName: "Exotic Pavlova Parfait",
          recipePic: "https://www.edamam.com/web-img/ad4/ad45e808ba33a4af2916110bedcaa00b.jpg",
          stars: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          recipeId: "19d54db517d363ccfdb697c2f6febee1",
          recipeName: "Saffron Almonds",
          recipePic: "https://www.edamam.com/web-img/cc8/cc807bb2bff693289594adb743dda43f.jpg",
          stars: 5,
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