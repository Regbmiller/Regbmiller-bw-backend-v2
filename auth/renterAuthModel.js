const db = require("../database/dbConfig")

module.exports={
    addRenter,
    findRenters,
    findRenterById,
}

function addRenter(user) {
  return db("Renter")
    .insert(user)
    .returning("id")
    .then(ids => {
      return findRenterById(ids[0]);
    });
}

function findRenters(filter) {
    return db('Renter')
      .where(filter)
  }

  function findRenterById(id) {
    return db("Renter")
      .where({ id })
      .first();
  }
  