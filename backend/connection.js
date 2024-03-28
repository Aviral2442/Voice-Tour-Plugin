//req command
const mongoose = require('mongoose');

const url="mongodb+srv://aviral2442:aviral2442@cluster0.lilbdzb.mongodb.net/voice&tourdatabase?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous function - return promise
mongoose.connect(url)

// thenc command - this command help you to see whether url is working aur throuhing error
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log('err');
    
});

// console.log('last line');

module.exports = mongoose;