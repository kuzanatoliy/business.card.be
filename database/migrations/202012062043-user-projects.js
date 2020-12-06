module.exports = {
  down: queryInterface => queryInterface.dropTable('UserProjects'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserProjects', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    customerId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    description: DataTypes.TEXT,
    endYear: DataTypes.INTEGER,
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    link: DataTypes.STRING,
    startYear: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    team: DataTypes.STRING,
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
    },
    userRoleId: {
      allowNull: false,
      type: DataTypes.UUID
    }
  })
};
