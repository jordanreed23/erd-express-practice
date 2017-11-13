
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Harrison Ford', role: 'actor'},
        {id: 2, name: 'James Earl Jones', role: 'actor'},
        {id: 3, name: 'George Lucas', role: 'director'},
      ]);
    });
};
