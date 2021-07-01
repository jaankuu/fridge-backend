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
          profileUrl: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625130858/gui_acme4p.jpg",
          password: bcrypt.hashSync("chicken", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jaan",
          email: "jaan@jaan.jaan",
          profileUrl: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625130858/jaan_yujg8w.jpg",
          password: bcrypt.hashSync("itssecret", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Luis",
          email: "l@l.l",
          profileUrl: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625130937/luis_qwki5g.jpg",
          password: bcrypt.hashSync("itsluis", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fernando",
          email: "f@f.f",
          profileUrl: "https://res.cloudinary.com/dyzzo8hq1/image/upload/v1625130858/fernando_fyrqyv.jpg",
          password: bcrypt.hashSync("itsfernando", SALT_ROUNDS),
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
