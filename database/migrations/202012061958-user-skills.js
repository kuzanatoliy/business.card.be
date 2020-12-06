module.exports = {
  down: queryInterface => queryInterface.dropTable('UserSkills'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserSkills', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    firstUsed: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    lastUsed: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    level: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    skillId: {
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
