module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserRoles', 'UserRoles_userId_Users_fk'),
  up: queryInterface => queryInterface.addConstraint('UserRoles', {
    fields:  [ 'userId' ],
    name: 'UserRoles_userId_Users_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Users'
    },
    type: 'FOREIGN KEY',
  })
};
