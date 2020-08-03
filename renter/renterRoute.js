const express =require("express")
const db = require("./renterModel")
const router = express.Router()

//get all renters
router.get("/", restricted(),(req,res)=>{
    db.getAllRenters()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(err=>{
        res.status(500).json({message:"unable to get users"})
        console.log(err)
    })
})

// get renter by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    db.findRenterById(id)
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500)
          .json({ message: "Renter not found" });
          console.log(err)
      });
  });
  
  module.exports = router