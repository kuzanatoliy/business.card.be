module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserRoles', 'UserRoles_userId_Roles_fk'),
  up: queryInterface => queryInterface.addConstraint('UserRoles', {
    fields:  [ 'roleId' ],
    name: 'UserRoles_userId_Roles_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Roles'
    },
    type: 'FOREIGN KEY',
  })
};
