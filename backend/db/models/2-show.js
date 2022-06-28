'use strict';
module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {
    bandName: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    showDate: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    about: {
      type: DataTypes.TEXT(500)
    },
    showCreatorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Show.associate = function(models) {
    // associations can be defined here
    Show.hasMany(models.Ticket, { foreignKey: 'showId' });
    Show.belongsTo(models.User, { foreignKey: 'showCreatorId'})
  };
  return Show;
};
