exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', (table) => {
    table.increments();
    table.string('name');
    table.string('role');
});
};

exports.down = function(knex, Promise) {
knex.schema.dropTable('people');
};
