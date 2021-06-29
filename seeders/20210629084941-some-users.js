'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Guilherme",
          email: "g@g.g",
          password: "chicken",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jaan",
          email: "jaan@jaan.jaan",
          password: "itssecret", 
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
