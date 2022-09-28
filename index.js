// importing express
const express = require('express');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const cors = require('cors');

// intializing express server
const app = express();
const port = 5000;

// middleware
// to parse json data to javascript
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))

app.use('/user', userRouter);
app.use('/product', productRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
})

app.get('/home', (req, res) => {
    res.send('response from home');
})

// starting the server
app.listen(port, () => {
    console.log('server started');
})