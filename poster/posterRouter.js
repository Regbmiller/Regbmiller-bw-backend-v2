const express =require("express")
const db = require("./posterModel")
const router = express.Router()

//get all posters
router.get("/", (req,res)=>{
    db.getAllPosters()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(err=>{
        res.status(500).json({message:"unable to get users"})
        console.log(err)
    })
})

//get poster by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.findPosterById(id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500)
          .json({ message: "Poster not found" });
          console.log(err)
      });
  });
  
  module.exports = router