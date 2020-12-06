module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserSkills', 'UserSkills_userId_Users_fk'),
  up: queryInterface => queryInterface.addConstraint('UserSkills', {
    fields:  [ 'userId' ],
    name: 'UserSkills_userId_Users_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Users'
    },
    type: 'FOREIGN KEY',
  })
};
