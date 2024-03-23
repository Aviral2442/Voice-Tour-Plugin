const {model, schema} = require('../connection');

const mySchema = new schema({

    name : String,
    age : Number,
    

});

module.exports = module('PostCollections', mySchema)