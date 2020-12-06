module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserProjects', 'UserProjects_userId_Users_fk'),
  up: queryInterface => queryInterface.addConstraint('UserProjects', {
    fields: [ 'userId' ],
    name: 'UserProjects_userId_Users_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Users'
    },
    type: 'FOREIGN KEY',
  })
};
