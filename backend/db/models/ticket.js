'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    showId: DataTypes.INTEGER,
    allowNull: false
  }, {});
  Ticket.associate = function(models) {
    Ticket.belongsTo(models.User, { foreignKey: id});
    Ticket.belongsTo(models.Show, { foreignKey: showId };)
  };
  return Ticket;
};