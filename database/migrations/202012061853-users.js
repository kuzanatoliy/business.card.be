module.exports = {
  down: queryInterface => queryInterface.dropTable('Users'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('Users', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    summary: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  })
};
