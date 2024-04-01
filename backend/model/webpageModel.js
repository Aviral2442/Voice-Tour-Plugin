const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({

    user: {type : Types.ObjectId, ref : 'user'},
    name: String,
    address: String,
    description: String,
    createdAt: Date

});

module.exports = model('webpage', mySchema);