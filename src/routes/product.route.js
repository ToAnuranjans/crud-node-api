const express = require('express');
const Product = require('../models/product.model');

const router = express.Router();




router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    try {
        const { name, price } = req.body;
        console.log({ name, price });
        const product = await Product.create({ name, price });
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = router;