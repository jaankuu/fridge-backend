'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Guilherme",
          email: "g@g.g",
          password: bcrypt.hashSync("chicken", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jaan",
          email: "jaan@jaan.jaan",
          password: bcrypt.hashSync("itssecret", SALT_ROUNDS),
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
