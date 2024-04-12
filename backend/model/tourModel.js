const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({

    user: {type : Types.ObjectId, ref : 'user'},
    webpages: Array,
    steps: Array,
    createdAt: Date
});

module.exports = model('tour', mySchema);