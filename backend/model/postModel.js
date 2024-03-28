const {model, Schema} = require('../connection');

const mySchema = new Schema({

    name : String,
    email: String,
    password: String,
    confirmPassword: String
    

});

module.exports = model('PostCollections', mySchema);