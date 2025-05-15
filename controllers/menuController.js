const Menu = require('./../modules/menuSchema.js');
const Food = require('./../modules/foodSchema.js');
const mongoose = require('mongoose');


// creates a Menu
exports.createMenu = async (req, res) => {
    try{
        const {name, storeID} = req.body;

        const newMenu = await Menu.create({
            name,
            storeID,
        });
        res.status(201).json({
            status: 'success',
            data: newMenu,
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            error: err.message
        })
    }
}

// edits a specific Menu by its id
exports.updateMenu = async (req, res) => {
    try{
        const updatedMenu = await Menu.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(200).json({
            status: 'success',
            data: updatedMenu,
        })

    }catch(err){
        res.status(400).json({
            status: 'failed',
            error: err.message
        })
    }
}

// delete a specific Menu by its id
exports.deleteMenu = async (req, res) => {
    try{
        await Menu.findByIdAndDelete(req.params.id)

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

exports.getMenu = async (req, res) => {
    try {
        const menus = await Menu.aggregate([
            {
                $lookup: {
                    from: 'foods', // must match the collection name in MongoDB, usually lowercase plural
                    localField: '_id',
                    foreignField: 'menuID',
                    as: 'foods',
                },
            },
        ]);

        res.status(200).json({
            status: 'success',
            data: menus,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};
