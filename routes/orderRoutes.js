const express = require('express');
const orderController = require('../controllers/orderController');
const authController = require("../controllers/authController");


const router = express.Router();

router.post('/create', orderController.createOrder);
router.patch('/update/:id', authController.protect, authController.restrictTo("Admin"), orderController.updateOrder);
router.get('/',authController.protect, authController.restrictTo("Admin"), orderController.getOrders);

module.exports = router;