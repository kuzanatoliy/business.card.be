module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserStrength', 'UserStrength_userId_Users_fk'),
  up: queryInterface => queryInterface.addConstraint('UserStrength', {
    fields:  [ 'userId' ],
    name: 'UserStrength_userId_Users_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Users'
    },
    type: 'FOREIGN KEY',
  })
};
