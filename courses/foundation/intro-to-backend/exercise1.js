import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  
  res.send("Hello from exercise 1pop!");
});

app.get("/currentYear", (req, res) => {
  const _date=new Date().getFullYear();
  res.send(`This Year: ${_date}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});