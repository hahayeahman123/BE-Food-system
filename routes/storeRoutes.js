const express = require('express');
const storeController = require('./../controllers/storeController.js');
const authController = require("../controllers/authController");

const router = express.Router();

router.post('/', authController.protect, authController.restrictTo('Admin'),storeController.createStore);
router.get('/',storeController.getStores);
router.delete('/:id', authController.protect, authController.restrictTo('Admin'), storeController.deleteStore);
router.patch('/:id', authController.protect, authController.restrictTo('Admin'), storeController.updateStore);

module.exports = router;
