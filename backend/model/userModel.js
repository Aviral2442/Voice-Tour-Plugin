const { model, Schema } = require('../connection');

const mySchema = new Schema({

    name: String,
    email: String,
    password: String,
    avatar: String,
    createdAt: Date,
    role: { type: String, default: 'user' }

});

module.exports = model('users', mySchema);