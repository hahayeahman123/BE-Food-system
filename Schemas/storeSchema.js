const mongoose= require('mongoose');

const StoreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A meal title is required']
    },
    code:{
        type: String,
        required: [true, 'A meal code is required']
    },
    address: {
        type: String
    }
})

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;