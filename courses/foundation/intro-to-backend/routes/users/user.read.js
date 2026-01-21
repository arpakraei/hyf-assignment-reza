import express from "express";
import knexInstance from "../../db/knex.js"


const router=express.Router();


router.get("/all-users", async (req, res) => {
    const allUsers=await knexInstance('users')
    .select('*');
    res.json(allUsers);
});

//unconfirmed-users should respond with unconfirmed usersv
router.get("/unconfirmed-users", async (req, res) => {
  const unConfirmedUser = await knexInstance('users')
  .whereNull("confirmed_at")
  .orderBy("id", "asc");
  res.json(unConfirmedUser);
});

//gmail-users should respond with users with an @gmail.com email
router.get("/gmail-users", async (req, res) => {
  const gmailUsers = await knexInstance('users')
  .where('email','like',"%@gmail.com")
  .orderBy('id','asc');
  res.json(gmailUsers);
});

//user-count should respond with the number of users
router.get("/user-count", async (req, res) => {
  const userCount = await knexInstance('users')
  .count({count:'*'});
  res.json(userCount[0]);
});

//last-name-count should respond with how many users there are with a given last name, sorted alphabetically
router.get("/last-name-count", async (req, res) => {
  const lastNameCount = await knexInstance('users')
  .select('last_name')
  .groupBy('last_name')
  .orderBy('last_name','asc')
  .count({count:'*'});
  res.json(lastNameCount);
});

//first-user should respond with the first user. If there are no users in the table, respond with a 404
router.get("/first-user", async (req, res) => {
  const firstUser = await knexInstance('users')
  .orderBy('id','asc')
  .first();
  if (!firstUser){
    return res.status(404).json({error:'No user found'});
  }
  res.json(firstUser.first_name);
  //.raw(`SELECT * FROM users Limit 1;`);
  //  if(rows.length===0){
   //   return res.status(404).send("<h1>User not found</h1>");
    //}
      
});
export default router;

