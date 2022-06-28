'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bandName: {
        type: Sequelize.STRING(75),
        allowNull: false
      },
      venue: {
        type: Sequelize.STRING(75),
        allowNull: false
      },
      location: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      showDate: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      about: {
        type: Sequelize.TEXT(500)
      },
      showCreatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shows');
  }
};
