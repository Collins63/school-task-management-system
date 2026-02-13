const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/task_router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
dotenv.config();
app.use("/api/tasks" , router);

mongoose.connect(process.env.MONGO_URL).then(()=> console.log('connected to MongoDB')).catch((err)=>console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
