exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title');
    table.integer('director_id').references('people.id').onDelete('CASCADE');
});
};

exports.down = function(knex, Promise) {
knex.schema.dropTable('movies');
};
