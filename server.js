const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path:'./config.env'})

// connect to database

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD) // create the database line, its safer this way

mongoose
    .connect(DB, {
        useNewUrlParser: true
    })
    .then(()=>{
        console.log("DB successfully connected to MongoDB");
    })
// how to start server:

const port = process.env.PORT;

app.get('/',(req,res)=>{res.send('Hello World!');});

app.listen(port, ()=>{
    console.log(`Server started, listening on ${port}`);
})