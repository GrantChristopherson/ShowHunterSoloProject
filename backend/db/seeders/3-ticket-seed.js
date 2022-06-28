'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Tickets', [
        {
          userId: 1,  
          showId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,  
          showId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          showId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Tickets', null, {});
  } 
};
