//npm i dotenv
require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

const app = express();

// app.get('/', (req,res)=>{
//     res.json({messsage: 'Welcome'});
// })

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('Listening on port 4000');
        });
    })
    .catch((error)=>{
        console.log('Error connecting to MongoDB:', error);
    });

