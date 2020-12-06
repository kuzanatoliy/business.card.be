module.exports = {
  down: queryInterface => queryInterface.dropTable('UserExperience'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserExperience', {
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
