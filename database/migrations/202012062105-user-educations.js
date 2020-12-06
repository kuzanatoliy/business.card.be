module.exports = {
  down: queryInterface => queryInterface.dropTable('UserEducation'),
  up: (queryInterface, DataTypes) => queryInterface.createTable('UserEducation', {
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    degree: DataTypes.STRING(10),
    endYear: DataTypes.INTEGER,
    faculty: DataTypes.STRING(100),
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID
    },
    link: DataTypes.STRING,
    specialty: DataTypes.STRING(80),
    startYear: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
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
  })
};
