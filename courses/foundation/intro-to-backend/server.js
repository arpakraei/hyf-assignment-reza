import express from "express";

const app=express();
const port=3000;

import usersRoutes from "./routes/users/index.js";
app.use(express.json());
app.use('/users',usersRoutes);




app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});
