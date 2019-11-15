const db = require('./dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  crudUpdate,
  remove,
};

function get() {
  return db('accounts');
}

function getById(id) {
  return db('accounts')
    .where({ id })
    .first();
}

function insert(account) {
  return db('accounts')
    .insert(account)
   
}

function crudUpdate(id, changes) {
  return db('accounts')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('accounts')
    .where('id', id)
    .del();
}
