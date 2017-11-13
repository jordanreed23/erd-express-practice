exports.up = function(knex, Promise) {
  return knex.schema.createTable('people_movies', (table) => {
    table.increments();
    table.integer('people_id').references('people.id').onDelete('CASCADE');
    table.integer('movies_id').references('movies.id').onDelete('CASCADE');
});
};

exports.down = function(knex, Promise) {
knex.schema.dropTable('people_movies');
};
