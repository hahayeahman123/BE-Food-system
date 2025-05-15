const express = require('express');
const menuController = require('./../controllers/menuController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/', authController.protect, authController.restrictTo('Admin'), menuController.createMenu);
router.patch('/:id', authController.protect, authController.restrictTo('Admin'), menuController.updateMenu);
router.delete('/:id', authController.protect, authController.restrictTo('Admin'), menuController.deleteMenu);
router.get('/', menuController.getMenu);

module.exports = router;