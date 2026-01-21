import express from "express";
import knexInstance from "../../db/knex";


const router=express.Router();

// DELETE /users/:id
// Deletes a user from the database by user ID
router.delete("/users/:id",async(req,res)=>{
    const {id}= req.params;
    console.log(id);
    const userDeleted= await knexInstance('users')
    .where('id',id)
    .del();
    if (userDeleted===0){
      return res.status(404).json({error:'User not found'});
    }
    res.json({ message: "User deleted successfully" });
    
});
