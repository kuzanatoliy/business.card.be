module.exports = {
  down: queryInterface => queryInterface.dropTable('UserProjectSkills'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserProjectSkills', {
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
    userSkillId: {
      allowNull: false,
      type: DataTypes.UUID
    }
  })
};
