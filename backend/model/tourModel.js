const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({

    title : {type : String, default: 'Unititled Tour' },
    user: {type : Types.ObjectId, ref : 'user'},
    steps: Array,
    createdAt: {type : Date, default : Date.now},
});

module.exports = model('tour', mySchema);