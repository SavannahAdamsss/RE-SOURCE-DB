
exports.seed = function(knex, Promise) {
  return knex('fe').del()
    .then(function () {
      return knex('fe').insert([
        {id: 1, title: 'MDN docs', body: '', link: 'https://developer.mozilla.org/en-US/', tags: '', notes: 'MDN docs'},
        {id: 2, title: 'JavaScript30', body: '', link: 'https://javascript30.com', tags: '', notes: 'entry level mongodb tutorial'},
        {id: 3, title: 'Higher Order Functions', body: '', link: 'http://eloquentjavascript.net/05_higher_order.html', tags: '', notes: 'Higher-Order functions: Eloquent JS'}
      ]);
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE fe_id_seq RESTART WITH 4;');
    })
};
