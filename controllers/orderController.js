const Order = require('../modules/orderSchema.JS');
const jwt = require("jsonwebtoken");

// creates an order
exports.createOrder = async (req, res) => {
    try{
        const {menuID, foodID, quantity} = req.body;

        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userID = decoded.id;

        const newOrder = await Order.create({
            menuID,
            foodID,
            userID,
            quantity,
        });
        res.status(200).json({
            status: 'success',
            data: newOrder,
        });

    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}

// updates a specific order, mainly used to change the status
exports.updateOrder = async (req, res) => {
    try{
        const orderID = req.params.id;
        const { status } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            orderID,
            { status },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            status: 'success',
            data: updatedOrder,
        })

    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}

// gets all the orders
exports.getOrders = async (req, res) => {
    try{
        const orders = await Order.find();

        res.status(200).json({
            status: 'success',
            data: {
                orders
            },
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
        })
    }
}