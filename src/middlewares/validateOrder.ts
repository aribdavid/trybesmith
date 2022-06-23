import { NextFunction, Request, Response } from 'express';
import schemaNewOrder from '../joi/schemaNewOrder';
import handleError from '../utils/handleError';

const validateOrder = (request: Request, _response: Response, next: NextFunction) => {
  const { productsIds } = request.body;

  const { error } = schemaNewOrder.validate({ productsIds }); 

  if (error) {
    const { type } = error.details[0];
    const message = type.includes('array.includesRequiredUnknowns')
      ? '"productsIds" must include only numbers'
      : error.message;

    const status = type.includes('any.required') ? 400 : 422;
    return next(handleError(status, message));
  }

  next();
};

export default validateOrder;