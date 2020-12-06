module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserExperience', 'UserExperience_userId_Users_fk'),
  up: queryInterface => queryInterface.addConstraint('UserExperience', {
    fields:  [ 'userId' ],
    name: 'UserExperience_userId_Users_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Users'
    },
    type: 'FOREIGN KEY',
  })
};
