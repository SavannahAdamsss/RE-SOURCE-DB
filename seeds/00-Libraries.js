
exports.seed = function(knex, Promise) {
  return knex('Libraries').del()
    .then(function () {
      return knex('Libraries').insert([
        {id: 1, title: 'DevArchy React Libraries', body: '', link: 'https://devarchy.com/react', tags: 'react', notes: 'Libs to use with React'},
        {id: 2, title: 'CDNJS', body: '', link: 'https://cdnjs.com/', tags: '', notes: 'indexed CDN for JS libraries'},
        {id: 3, title: 'Mozaik', body: '', link: 'https://mozaik.rocks/', tags: '', notes: 'Mozaïk is a tool based on nodejs / react / d3 / stylus to easily craft beautiful dashboards.'}
      ]);
    });
};
