// PUT /users/:id
// Updates the confirmed_at date for a specific user by ID
app.put("/users/:id",async(req,res)=>{
  const id=req.params.id;
  const date=req.body.date;
  console.log(date);
  const result=await knexInstance.raw(`Update users set confirmed_at='${date}' where id=${id}`);
  return res.send('ok')
});