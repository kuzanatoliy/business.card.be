module.exports = {
  down: queryInterface => queryInterface.dropTable('UserRoles'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserRoles', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    roleId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    }
  })
};
