const express = require('express');   
const cors = require('cors');

const app = express();

const postRouter = require('./routers/postRouter');

app.use(cors({
    origin: 'http//localhost:3000'
}));

app.use(express.json());

app.use('/post', postRouter);

const port = 5000;

app.post('/add', (req, res) => {
    res.send(' response from express server ')
} );

app.get('/add', (req, res) => {
    res.send(' add response from express server  ')
} );

app.listen( port, () => { console.log('Express Server Started'); });