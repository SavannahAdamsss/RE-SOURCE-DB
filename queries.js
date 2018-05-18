const database = require("./database-connection");

module.exports = {
    list() {
      return database('fe')
    },
    read(id) {
      return database('fe')
            .select('*')
            .where('id', id)
            .first();
    },
    create(item) {
      return database('fe')
            .insert(item)
            .returning('*')
            .then(item => item[0])
    },
    update(id, item) {
      return database('fe')
            .update(item)
            .where('id', id)
            .returning('*')
            .then(coffee => coffee[0])
    },
    delete(id) {
      return database('fe')
            .select('*')
            .where('id', id)
            .del()
    },
    list() {
      return database('be')
    },
    read(id) {
      return database('be')
            .select('*')
            .where('id', id)
            .first();
    },
    create(item) {
      return database('be')
            .insert(item)
            .returning('*')
            .then(item => item[0])
    },
    update(id, item) {
      return database('be')
            .update(item)
            .where('id', id)
            .returning('*')
            .then(coffee => coffee[0])
    },
    delete(id) {
      return database('be')
            .select('*')
            .where('id', id)
            .del()
    }
};
