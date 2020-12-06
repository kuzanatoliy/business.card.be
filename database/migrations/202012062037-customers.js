module.exports = {
  down: queryInterface => queryInterface.dropTable('Customers'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('Customers', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    description: DataTypes.TEXT,
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    link: DataTypes.STRING,
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
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
