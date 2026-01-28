import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

app.use(express.json());


// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,  // Omit warning in console
});




/*
/2022-users should respond with users created in 2022
/first-user should respond with the first user. If there are no users in the table, respond with a 404
*/
//unconfirmed-users should respond with unconfirmed usersv
app.get("/unconfirmed-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users Where confirmed_at is Null ORDER BY id ASC;");
  res.json(rows);
});
app.get("/", (req, res) => {
  
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
          fetch("/user-count")
          .then(res => res.json())
          .then(data => {
          document.getElementById("count").textContent = data.count;
          });
        </script>
      </body>
    </html>
  `);
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});
//gmail-users should respond with users with an @gmail.com email
app.get("/gmail-users", async (req, res) => {
  const rows = await knexInstance.raw('SELECT * FROM users Where email like "%@gmail.com" ORDER BY id ASC;');
  res.json(rows);
});

//user-count should respond with the number of users
app.get("/user-count", async (req, res) => {
  const rows = await knexInstance.raw('SELECT count(*) as count FROM users ');
  res.json(rows[0]);
});

//last-name-count should respond with how many users there are with a given last name, sorted alphabetically
app.get("/last-name-count", async (req, res) => {
  const rows = await knexInstance.raw(`SELECT count(*) as Count_By_Lastname FROM users Where last_name="${req.query.name}"`);
  res.json(rows[0]);
});

//first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get("/first-user", async (req, res) => {
  const rows = await knexInstance.raw(`SELECT * FROM users Limit 1;`);
    if(rows.length===0){
      return res.status(404).send("<h1>User not found</h1>");
    }
      
});

// DELETE /users/:id
// Deletes a user from the database by user ID
app.delete("/users/:id",async(req,res)=>{
  
  const Deleted = await knexInstance.raw(`delete from users where id=${req.params.id}`);
  if (!Deleted || Deleted.changes === 0) {
    return res.send ('User Not Found!');
  }
  return res.send('User Deleted Successfuly');
});

// PUT /users/:id
// Updates the confirmed_at date for a specific user by ID
app.put("/users/:id",async(req,res)=>{
  const id=req.params.id;
  const date=req.body.date;
  console.log(date);
  const result=await knexInstance.raw(`Update users set confirmed_at='${date}' where id=${id}`);
  return res.send('ok')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});