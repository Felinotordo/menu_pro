const express = require('express');
const router = express.Router(); 
const itemController = require('../controllers/items');
const categoryController = require('../controllers/category');

router.get('/items/:name', itemController.getItemByName); 
router.get('/category', categoryController.getCategories) 
router.get('/category/:category', categoryController.getItemsByCategory) 

module.exports = router;
