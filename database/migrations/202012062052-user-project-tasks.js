module.exports = {
  down: queryInterface => queryInterface.dropTable('UserProjectTasks'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserProjectTasks', {
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
    userProjectId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    value: {
      allowNull: false,
      type: DataTypes.STRING
    }
  })
};
