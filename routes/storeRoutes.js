const express = require('express');
const storeController = require('./../controllers/storeController.js');
const authController = require('./../controllers/authController.js');

const router = express.Router();

router.post('/', authController.protect, storeController.createStore);
router.get('/',storeController.getStores);
router.delete('/:id', authController.protect, storeController.deleteStore);
router.patch('/:id', authController.protect, storeController.updateStore);

module.exports = router;
