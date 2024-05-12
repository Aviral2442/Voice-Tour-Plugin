const { model, Schema } = require('../connection');

const mySchema = new Schema({

    name: String,
    email: String,
    password: String,
    avatar: String,
    createdAt: Date,
    role: { type: String, default: 'user' },
    avatar: { type: String, default: 'avatar_placeholder.png'},
    type: { type: String, default: 'normal' }
});

module.exports = model('users', mySchema);