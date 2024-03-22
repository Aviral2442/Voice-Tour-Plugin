const mongoose = require('mongoose');

const url = " ";

mongoose.connect(url);

.then((result) => {
    console.log('Database Connected Successfully');
    
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;