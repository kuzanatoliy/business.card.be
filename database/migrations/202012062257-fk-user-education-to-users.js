module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserEducation', 'UserEducation_userId_Users_fk'),
  up: queryInterface => queryInterface.addConstraint('UserEducation', {
    fields: [ 'userId' ],
    name: 'UserEducation_userId_Users_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Users'
    },
    type: 'FOREIGN KEY',
  })
};
