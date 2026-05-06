const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const UserRouter=require('./routes/userRoutes')
const app = express();
const port = 3000;

connectDB()

app.use(express.json());
app.use(bodyParser.json());
app.use('/api/users', UserRouter);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})