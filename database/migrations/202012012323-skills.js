module.exports = {
  down: queryInterface => queryInterface.dropTable('Skills'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('Skills', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    description: DataTypes.STRING,
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  })
};
