const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

//Routing RESTful
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.post('/', controller.createProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);


router.get('/', (req, res) => {
    res.send('This is the products route');
});

module.exports = router;