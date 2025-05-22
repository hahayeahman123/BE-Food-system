const express = require('express');
const foodController = require('../controllers/foodController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/', authController.protect, foodController.createFood);
router.patch('/:id', authController.protect, foodController.updateFood);
router.delete('/:id', authController.protect, foodController.deleteFood);
router.get('/', foodController.getFoods);
router.get('/:id', foodController.getFood);


module.exports = router;