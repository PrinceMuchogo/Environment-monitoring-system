const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const router = require('./routes/route')

const cors = require('cors');

app.use(cors({
  origin: ['http://10.16.28.122:5555', 'http://192.168.137.1:5555', 'http://localhost:5555', 'http://127.0.0.1:5555'  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// middleware
app.use(express.json());
app.use('/api/v1/environment_monitoring/', require('./routes/route'));



const PORT = 3000;
const MONGO_URI = 'mongodb+srv://Jecha3323:3JJiNZMrVwNHU2Gb@nodeandexpressprojects.elzwyc8.mongodb.net/env_monitoring?retryWrites=true&w=majority';


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((err) => {
    console.error(`Failed to connect to MongoDB`);
  });