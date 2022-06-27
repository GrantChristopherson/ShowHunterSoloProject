'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    bandName: {
      DataTypes.STRING(75),
      allowNull: false
    },
    venue: {
      DataTypes.STRING(75),
      allowNull: false
    },
    location: {
      DataTypes.STRING(150),
      allowNull: false
    },
    showDate: {
      DataTypes.STRING(30),
      allowNull: false
    },
    about: {
      DataTypes.TEXT(500)
    },
    showCreatorId: {
      DataTypes.INTEGER,
      allowNull: false,
    },
    showTicketId: {
      DataTypes.INTEGER,
      allowNull: false
  }, {});
  Show.associate = function(models) {
    // associations can be defined here
  };
  return Show;
};