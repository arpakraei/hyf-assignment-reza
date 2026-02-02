// PUT /users/:id
// Updates the confirmed_at date for a specific user by ID

import express from "express";
import knexInstance from "../../db/knex.js";

const router=express.Router();

router.put('/:id',async(req,res)=>{
  try{
    const {id}=req.params;
    const {date}=req.body;
    if (!date) {
      return res.status(400).json({ error: "date is required" });
              }
    const updatedCount = await knexInstance("users")
      .where("id", id)
      .update({ confirmed_at: date });

    if (updatedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully" });
  } catch (error){
    console.error("PUT /users/:id failed:", error);
    res.status(500).json({error:"Failed to update users"});
  }
});

export default router;


