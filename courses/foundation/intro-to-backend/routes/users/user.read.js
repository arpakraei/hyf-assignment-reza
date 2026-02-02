import express from "express";
import knexInstance from "../../db/knex.js"


const router=express.Router();


router.get("/", (req, res) => {
  
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>User Count</title>
      </head>
      <body>
        <h1>User Count Page</h1>
        <p>Total users: <span id="count">loading...</span></p>

        <script>
          fetch("users/user-count")
          .then(res => res.json())
          .then(data => {
          document.getElementById("count").textContent = data.count;
          });
        </script>
      </body>
    </html>
  `);
});


router.get("/all-users", async (req, res) => {
  try{
    const allUsers=await knexInstance('users')
    .select('*');
    res.json(allUsers);
  }catch (error){res.status(500).json({error:"Failed to fetch users"})};
});

//unconfirmed-users should respond with unconfirmed usersv
router.get("/unconfirmed-users", async (req, res) => {
  try{
  const unConfirmedUser = await knexInstance('users')
  .whereNull("confirmed_at")
  .orderBy("id", "asc");
  res.json(unConfirmedUser);
  }catch(error){
    res.status(500).json({error:"Failed to fetch users",});
  }
});

//gmail-users should respond with users with an @gmail.com email
router.get("/gmail-users", async (req, res) => {
  try{
  const gmailUsers = await knexInstance('users')
  .where('email','like',"%@gmail.com")
  .orderBy('id','asc');
  res.json(gmailUsers);}
  catch (error){
    res.status(500).json({error:"Failed to fetch users"});
  };
});

//user-count should respond with the number of users
router.get("/user-count", async (req, res) => {
  try{
  const userCount = await knexInstance('users')
  .count({count:'*'});
  res.json({count:userCount[0].count});
  }
  catch(error){
    res.status(500).json({error:"Failed to count users"});
  }
});

//last-name-count should respond with how many users there are with a given last name, sorted alphabetically
router.get("/last-name-count", async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: "last name is required" });
    }

    const result = await knexInstance("users")
      .where("last_name", name)
      .count({ count: "*" });

    res.json({
      last_name: name,
      count: result[0].count,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

//first-user should respond with the first user. If there are no users in the table, respond with a 404
router.get("/first-user", async (req, res) => {
  try {
  const firstUser = await knexInstance('users')
  .orderBy('id','asc')
  .first();
  if (!firstUser){
    return res.status(404).json({error:'No user found'});
  }
  res.json(firstUser);
}catch(error){
   res.status(500).json({error:"Failed to fetch users"});
}

});
export default router;

