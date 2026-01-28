// PUT /users/:id
// Updates the confirmed_at date for a specific user by ID

import express from "express";
import knexInstance from "../../db/knex.js";

const router=express.Router();

router.put('/:id',async(req,res)=>{
    const {id}=req.params;
    const {date}=req.body;
    const updatedCount = await knexInstance("users")
      .where("id", id)
      .update({ confirmed_at: date });

    if (updatedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully" });
});

export default router;


