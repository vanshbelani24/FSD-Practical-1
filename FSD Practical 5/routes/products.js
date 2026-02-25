
import express from 'express';
import { productSchema } from '../validation/productsValidation.js';

export const productsRouter = express.Router();

let products = [
  { id: 1, name: 'Laptop', price: 60000, inStock: true },
  { id: 2, name: 'Phone', price: 30000, inStock: true }
];

productsRouter.get('/', (req, res) => {
  res.json(products);
});

productsRouter.post('/', (req, res, next) => {
  const { error, value } = productSchema.validate(req.body);
  if (error) {
    error.status = 400;
    return next(error);
  }
  const newProduct = { id: products.length + 1, ...value };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
