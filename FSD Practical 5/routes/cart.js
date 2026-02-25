
import express from 'express';
import { cartItemSchema } from '../validation/cartValidation.js';

export const cartRouter = express.Router();

let cart = [];

cartRouter.get('/', (req, res) => {
  res.json(cart);
});

cartRouter.post('/', (req, res, next) => {
  const { error, value } = cartItemSchema.validate(req.body);
  if (error) {
    error.status = 400;
    return next(error);
  }
  const newItem = { id: cart.length + 1, ...value };
  cart.push(newItem);
  res.status(201).json(newItem);
});
