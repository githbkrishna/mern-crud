import express from 'express';
import Product from '../model/Product.model.js';
import mongoose from 'mongoose';
import { createProducts, deleteProducts, getProducts, updateProducts } from '../controller/Products.controller.js';

const router = express.Router();

router.get('/', getProducts); // Get all products
router.post('/', createProducts) // Create a new product
router.put('/:id', updateProducts); // Update a product
router.delete('/:id', deleteProducts); // Delete a product

export default router;