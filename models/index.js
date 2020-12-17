const mongoose = require('mongoose');
// Mongo connection
mongoose.connect(process.env.Mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

const db = mongoose.connection;

//Set up an event listener will fire once the connection opens for the database;
//Log to the terminal what host and port we are on.

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.part} `);
})

db.on('error', (error) => {console.log(`Database error\n ${error}`)});

const User= require('./User');

module.exports = User;
