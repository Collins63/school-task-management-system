const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const taskRouter = require('./routes/task_router');
import taskRouter from "./routes/task_router.js"
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
dotenv.config();
app.use("/api/tasks" , taskRouter);

mongoose.connect(process.env.MONGO_URL).then(()=> console.log('connected to MongoDB')).catch((err)=>console.log(err));
  

app.listen(process.env.PORT  || PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});