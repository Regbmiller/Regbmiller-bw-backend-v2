const db = require("../database/dbConfig")

module.exports={
    addPoster,
    findPosters,
    findPosterById,
}

function addPoster(user) {
  return db("Poster")
    .insert(user)
    .returning("id")
    .then(ids => {
      return findPosterById(ids[0]);
    });
}
  function findPosters(filter) {
    return db('Poster')
      .where(filter)
  }
  function findPosterById(id) {
    return db("Poster")
      .where({ id })
      .first();
  }