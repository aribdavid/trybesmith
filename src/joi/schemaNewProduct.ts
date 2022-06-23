import joi from 'joi';

const schemCreateProduct = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
});

export default schemCreateProduct;