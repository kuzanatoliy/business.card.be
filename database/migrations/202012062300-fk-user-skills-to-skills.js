module.exports = {
  down: queryInterface => queryInterface.removeConstraint('UserSkills', 'UserSkills_userId_Skills_fk'),
  up: queryInterface => queryInterface.addConstraint('UserSkills', {
    fields:  [ 'skillId' ],
    name: 'UserSkills_userId_Skills_fk',
    onDelete: 'cascade',
    onUpdate: 'cascade',
    references: {
      field: 'id',
      table: 'Skills'
    },
    type: 'FOREIGN KEY',
  })
};
