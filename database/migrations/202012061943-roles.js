module.exports = {
  down: queryInterface => queryInterface.dropTable('Roles'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('Roles', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING(20)
    }
  })
};
