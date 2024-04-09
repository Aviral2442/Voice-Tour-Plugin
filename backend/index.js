const express = require('express');   
const cors = require('cors');

const app = express();

const userRouter = require('./routers/userRouter');
const webRouter = require('./routers/webRouter');

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}));


app.use('/user', userRouter);
app.use('/webpage', webRouter);

const port = 5000;

app.post('/add', (req, res) => {
    res.send(' response from express server ')
} );

app.get('/add', (req, res) => {
    res.send(' add response from express server  ')
} );

app.listen( port, () => { console.log('Express Server Started'); });