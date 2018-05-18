
exports.up = function(knex, Promise) {
  return knex.schema.createTable('libraries', table => {
    table.increments('id').primary()
    table.text('title')
    table.text('body')
    table.text('link')
    table.text('tags')
    table.text('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.scheme.dropTableIfExists('libraries')
};
