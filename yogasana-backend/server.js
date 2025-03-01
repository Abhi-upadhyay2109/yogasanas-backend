const express = require('express');
require('dotenv').config();
const connectMongoDb = require('./config/db');
const cors = require('cors');
const userRouter = require('./routes/user.routes');


const app = express()
app.use(express.json());
app.use(cors());
app.use("/user",userRouter);


app.get("/",(req,res)=>{
  res.status(201).send("Hello world!")
});

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  connectMongoDb()
  console.log(`server is running http://localhost:${PORT}`);
});