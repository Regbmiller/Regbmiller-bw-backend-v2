const express = require("express");
const items = require("./itemModel");
const jwt = require("jsonwebtoken");
const router = express.Router();

//get all items
  router.get("/", (req, res) => {
    items
      .getItems()
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(500).json(console.log(err));
      });
  });

//get item by id 
  router.get("/item/:id",(req, res) => {
    items
      .getItemByID(req.params.id)
      .then((itemId) => {
        res.status(200).json({
          data: itemId,
          message: "item found",
        });
      })
      .catch((err) => {
        res.status(500).json(console.log(err));
      });
  });

//add item 
router.post("/", 
(req, res) => {
    const newItem = req.body
    items.addItem(newItem)
    .then((item)=>{
      res.status(201).json({
        data: item,
        message: "item added",
      });
      console.log(item);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "unable to add item",
      });
    });
});

//update item
router.put("/:id", (req, res) => {
  const updateItem = req.body;
  const idU = req.params.id

  items
    .updateItem(id,updateItem)
    .then((item) => {
      res.status(201).json({
        data: item,
        message: "you updated item",
      });
      console.log(item);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "unable to update item ",
      });
    });
});

//delete item
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  items
    .removeItem(id)
    .then((item) => {
      res.status(201).json({
        data: item,
        message: "item deleted",
      });
      console.log(item);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "unable to delete item ",
      });
    });
});

//add message to item listing
router.post("/:id", (req, res) => {
  const item_id = req.params.id;
  const { content, user_id } = req.body;
  items
    .addMessageToRentItem(item_id, user_id, content)
    .then((messagesent) => {
      res.status(201).json({
        data:messagesent,
        message: "message sent",
      });
      console.log(messagesent);
    })
    .catch((err) => {
      console.log({ err });
      res.status(500).json({
        message: "unable to add message",
      });
    });
});


module.exports = router;