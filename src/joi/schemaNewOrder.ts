import joi from 'joi';

const schemaNewOrder = joi.object({
  productsIds: joi.array().items(
    joi.number().required(),
  ).required(),
});

export default schemaNewOrder;