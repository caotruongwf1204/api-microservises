'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRoles = sequelize.define('User_Roles', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }
  }, {
    timestamps: false
  });
  return UserRoles;
};
