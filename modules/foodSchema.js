const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A food title is required']
    },
    price: {
        type: Number,
        required: [true, 'A food price is required']
    },
    menuID:{
        type: mongoose.Schema.ObjectId,
        ref: 'Menu',
        required: [true, 'A menu ID is required']
    }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food;