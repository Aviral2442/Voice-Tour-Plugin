const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({

    title : {type : String, default: 'Unititled Tour' },
    color: {type : String, default: '#66ff00'},
    bgcolor: {type : String, default: '#000000'},
    textcolor: {type : String, default: '#ffffff'},
    arrowcolor: {type : String, default: '#ffffff'},
    overlaycolor: {type : String, default: 'rgba(0, 0, 0, 0.5)'},
    width: {type : Number, default: 300},
    user: {type : Types.ObjectId, ref : 'user'},
    steps: Array,
    createdAt: {type : Date, default : Date.now},
});

module.exports = model('tour', mySchema);