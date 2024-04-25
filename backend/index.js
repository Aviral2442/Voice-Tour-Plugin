const express = require('express');   
const cors = require('cors');

const app = express();

const userRouter = require('./routers/userRouter');
const webRouter = require('./routers/webRouter');
const tourRouter = require('./routers/tourRouter');

app.use(express.json());
app.use(cors({
    origin: '*'
}));


app.use('/user', userRouter);
app.use('/webpage', webRouter);
app.use('/tour', tourRouter);

app.use(express.static('./static/uploads'));

const port = 5000;

app.post('/add', (req, res) => {
    res.send(' response from express server ')
} );

app.get('/add', (req, res) => {
    res.send(' add response from express server  ')
} );

app.listen( port, () => { console.log('Express Server Started'); });