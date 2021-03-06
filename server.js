require ('dotenv').config();
const express = require('express');
const app =express();
const cors=require('cors')
const passport = require('passport');
const { urlencoded} =require('express');
require('./config/passport')(passport);
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extend: false}));
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).json({message: 'Rome is always watching over you....'})
})

const users =require('./controllers/users');

app.use('/controllers/users' ,users);

app.listen(PORT, () => {
    console.log('Server is listening to port 8000')
})

