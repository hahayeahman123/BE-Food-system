const express = require('express');
const storeRoutes = require('./routes/storeRoutes');
const menuRoutes = require('./routes/menuRoutes.js');
const foodRoutes = require('./routes/foodRoutes.js');
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");

const app = express();
app.use(express.json());

// routes
app.use('/api/store', storeRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/user', userRoutes);
app.use('/api/order', orderRoutes);


module.exports = app;