module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserProjects', 'UserProjects_userId_Customers_fk'),
  up: queryInterface => queryInterface.addConstraint('UserProjects', {
    fields: [ 'customerId' ],
    name: 'UserProjects_userId_Customers_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Customers'
    },
    type: 'FOREIGN KEY',
  })
};
