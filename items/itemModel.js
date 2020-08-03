const db = require("../database/dbConfig")

module.exports = {
    getItems,
    getItemByID,
    addItem,
    updateItem,
    deleteItem,
    addMessage,
    removeMessage,
    getMessagesByItem

}

  function getItems(){
      return db("items")
  }

  function getItemByID(id) {
    return db('items').where({ id: Number(id) });
  }

  function addItem(item) {
    return getItems().insert(item);
  }

  function updateItem(id, updates) {
    return db("items")
      .where({ id })
      .update(updates)
  }

  function deleteItem(id) {
    return db("items")
      .where("id", id)
      .del()
  }  
  
  function addMessage(item_id, user_id, content) {
    return db("messages","items").insert({
      item_id: item_id,
      user_id: user_id,
      content: content
    });
   
  }

  function removeMessage(message) {
      return getAllItems()
      .where({message})
      .del()
  }
function getMessagesByItem(){
    return db("messages")
    .select(["*"])
    .from("messages")
    .where("items.category", "=", id);
}
