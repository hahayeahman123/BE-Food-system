const express = require('express');
const foodController = require('../controllers/foodController');
const authController = require("../controllers/authController");

const router = express.Router();

router.post('/', authController.protect, authController.restrictTo('Admin'), foodController.createFood);
router.patch('/:id', authController.protect, authController.restrictTo('Admin'), foodController.updateFood);
router.delete('/:id', authController.protect, authController.restrictTo('Admin'), foodController.deleteFood);


module.exports = router;