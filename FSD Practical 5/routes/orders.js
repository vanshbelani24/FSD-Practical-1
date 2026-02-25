
import express from 'express';
import { orderSchema } from '../validation/ordersValidation.js';

export const ordersRouter = express.Router();

let orders = [];

ordersRouter.get('/', (req, res) => {
  res.json(orders);
});

ordersRouter.post('/', (req, res, next) => {
  const { error, value } = orderSchema.validate(req.body);
  if (error) {
    error.status = 400;
    return next(error);
  }
  const newOrder = { id: orders.length + 1, ...value };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});
