const db = require("../database/dbConfig")

module.exports = {
    getAllRenters,
    findRenterById
}

function getAllRenters(){
    return db("Renters")
}

function findRenterById(id){
    return db("Renterusers")
    .where({id})
    .first()
}