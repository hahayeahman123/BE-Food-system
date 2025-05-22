const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    menuID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Menu',
        required: true,
    },
    foodID: {
        type: mongoose.Schema.ObjectId,
        ref: 'Food',
        required: true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['Uzsakyta', 'Ivykdyta'],
        default: 'Uzsakyta',
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const Order =  mongoose.model('Order', orderSchema);

module.exports = Order;