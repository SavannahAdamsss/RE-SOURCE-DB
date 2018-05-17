
exports.seed = function(knex, Promise) {
  return knex('BE').del()
    .then(function () {
      return knex('BE').insert([
        {id: 1, title: 'knexjs.org', body: '', link: 'https://knexjs.org', tags: '', notes: 'Docs for knex.js'},
        {id: 2, title: 'mongoDB tutorial', body: '', link: 'https://medium.freecodecamp.org/how-to-set-up-a-database-if-youre-a-front-end-developer-3ed945221219', tags: '', notes: 'entry level mongodb tutorial'},
        {id: 3, title: 'SQL cheatsheet', body: '', link: 'https://devhints.io/sql-join', tags: '', notes: 'SQL Joins cheetsheet'}
      ]);
    });
};
