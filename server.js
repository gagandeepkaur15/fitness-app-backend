//npm i dotenv
require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');

const app = express();

// app.get('/', (req,res)=>{
//     res.json({messsage: 'Welcome'});
// })

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('Listening on port 4000')
        })
    })
    .catch((error)=>{
        console.log(error);
    });

