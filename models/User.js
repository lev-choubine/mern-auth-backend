const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    date: {
        type: Date,
        defalut: Date.now()
    }
});

const User = mongoose.model('User', userSchema)

module.export = User;
