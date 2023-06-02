const express = require('express')
const json = require('express')
const userRoutes = require('./routes/user.routes')
const connection = require('./db/db')
const app = express();

app.use(json());

app.get('/',(req,res) => {
    res.send('Welcome to the backend')
})

connection
.then(console.log("Successfully connected to database"))

app.use('/api/user/',userRoutes);

app.listen(5000, (req,res) => {
    console.log('server running on http://localhost:5000');
})
