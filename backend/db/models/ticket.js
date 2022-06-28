'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.User, { foreignKey: userId });
    Ticket.belongsTo(models.Show, { foreignKey: showId });
  };
  return Ticket;
};
