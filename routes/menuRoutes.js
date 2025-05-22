const express = require('express');
const menuController = require('./../controllers/menuController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/', authController.protect, menuController.createMenu);
router.patch('/:id', authController.protect, menuController.updateMenu);
router.delete('/:id', authController.protect, menuController.deleteMenu);
router.get('/', menuController.getMenu);

module.exports = router;