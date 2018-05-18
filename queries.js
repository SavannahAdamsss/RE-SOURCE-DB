const database = require("./database-connection");

module.exports = {
    list() {
      return database('FE')
    },
    read(id) {
      return database('FE')
            .select('*')
            .where('id', id)
            .first();
    },
    create(item) {
      return database('FE')
            .insert(item)
            .returning('*')
            .then(item => item[0])
    },
    update(id, item) {
      return database('FE')
            .update(item)
            .where('id', id)
            .returning('*')
            .then(coffee => coffee[0])
    },
    delete(id) {
      return database('FE')
            .select('*')
            .where('id', id)
            .del()
    }
};
