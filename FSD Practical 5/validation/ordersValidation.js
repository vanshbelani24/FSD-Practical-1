
import Joi from 'joi';

export const orderSchema = Joi.object({
  userId: Joi.number().integer().required(),
  items: Joi.array().items(
    Joi.object({
      productId: Joi.number().integer().required(),
      quantity: Joi.number().integer().min(1).required()
    })
  ).min(1).required(),
  total: Joi.number().positive().required()
});
