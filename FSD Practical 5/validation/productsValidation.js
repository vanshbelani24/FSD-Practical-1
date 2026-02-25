
import Joi from 'joi';

export const productSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  price: Joi.number().positive().required(),
  inStock: Joi.boolean().default(true)
});
