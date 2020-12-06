module.exports = {
  down: queryInterface => queryInterface.dropTable('UserStrength'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserStrength', {
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
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })
};
