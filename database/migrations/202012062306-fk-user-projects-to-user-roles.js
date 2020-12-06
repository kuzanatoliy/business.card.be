module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserProjects', 'UserProjects_userId_UserRoles_fk'),
  up: queryInterface => queryInterface.addConstraint('UserProjects', {
    fields: [ 'userRoleId' ],
    name: 'UserProjects_userId_UserRoles_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'UserRoles'
    },
    type: 'FOREIGN KEY',
  })
};
