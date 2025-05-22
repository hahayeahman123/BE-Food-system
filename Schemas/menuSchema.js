const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A menu title is required']
    },
    storeID:{
        type: mongoose.Schema.ObjectId,
        ref: 'Store',
        required: [true, 'A Store ID is required']
    }
})


const Menu = mongoose.model('Menu',menuSchema);

module.exports = Menu;