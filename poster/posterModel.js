const db = require("../database/dbConfig")

module.exports = {
    getAllPosters,
    findPosterById
}

function getAllPosters(){
    return db("Posters")
}

function findPosterById(id){
    return db("users")
    .where({id})
    .first()
}
