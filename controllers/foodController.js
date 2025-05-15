const Food = require('../modules/foodSchema.js');
const Store = require("../modules/storeSchema");
const Menu = require("../modules/menuSchema");


// creates a food listing
exports.createFood = async (req, res) => {
    try{
        const { name, price, menuID } = req.body;

        const newFood = await Food.create({
            name,
            price,
            menuID
        });
        res.status(200).json({
            status: 'success',
            length: newFood.length,
            data: newFood
        })

    }catch(err){
        res.status(400).json({
            status: 'failed',
            error: err.message
        })
    }
};

// update a specific food by its _id

exports.updateFood = async (req, res) => {
    try{
        const updatedFood = await Food.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { name: req.body.name, price: req.body.price } },
        )
        res.status(200).json({
            status: "success",
            data: updatedFood,
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            error: err.message
        })
    }
}

// deletes a specific food by its _id

exports.deleteFood = async (req, res) => {
    try{
        await Food.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
            data: null
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            error: err.message
        })
    }
}