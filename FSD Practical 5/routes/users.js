
import express from 'express';
import { userSchema } from '../validation/usersValidation.js';

export const usersRouter = express.Router();

let users = [
  { id: 1, name: 'Mithil', email: 'mithil@example.com' }
];

usersRouter.get('/', (req, res) => {
  res.json(users);
});

usersRouter.post('/', (req, res, next) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    error.status = 400;
    return next(error);
  }
  const newUser = { id: users.length + 1, ...value };
  users.push(newUser);
  res.status(201).json(newUser);
});
