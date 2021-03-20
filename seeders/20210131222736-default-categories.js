const getDefaultCategories = require("../data/default-categories");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "BudgetCategories",
      getDefaultCategories,
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("BudgetCategories", null, {});
  }
};
