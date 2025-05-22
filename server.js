const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = require('./app');

dotenv.config({ path: './config.env' });



// Connect to DB
const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB, { useNewUrlParser: true })
    .then(() => console.log("DB successfully connected to MongoDB"));


// Start server
const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`Server started, listening on ${port}`);
});
