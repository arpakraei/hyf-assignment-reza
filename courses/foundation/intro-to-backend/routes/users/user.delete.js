import express from "express";
import knexInstance from "../../db/knex.js";


const router=express.Router();

// DELETE /users/:id
// Deletes a user from the database by user ID
router.delete("/:id",async(req,res)=>{
    try {
    const {id}= req.params;
    const userDeleted= await knexInstance('users')
    .where('id',id)
    .del();
    if (userDeleted===0){
      return res.status(404).json({error:'User not found'});
    }
    res.json({ message: "User deleted successfully" });
  } catch (error){
     console.error("DELETE /users/:id failed:", error);
     res.status(500).json({Error:"Failed to delete users"});
  }
    
});

export default router;
