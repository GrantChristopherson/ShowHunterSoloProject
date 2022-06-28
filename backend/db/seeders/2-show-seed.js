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
      return queryInterface.bulkInsert('Shows', [
        {
          bandName: 'Beach House',
          venue: 'The Fillmore',
          location: 'San Francisco',
          showDate: '04/18/2018',
          about: 'amazing...',
          showCreatorId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bandName: 'Moses Sumney',
          venue: 'Pappy and Harriets',
          location: 'Joshua Tree',
          showDate: '10/31/2021',
          about: 'Great Show, cold night.',
          showCreatorId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          bandName: 'Portishead',
          venue: 'The Greek',
          location: 'Berkeley',
          showDate: '08/2004',
          about: 'PPPooooorrrttishead.',
          showCreatorId: 1,
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
      return queryInterface.bulkDelete('Shows', null, {});
  }
};