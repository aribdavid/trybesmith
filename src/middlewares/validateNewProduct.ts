import { NextFunction, Request, Response } from 'express';
import schemaNewProduct from '../joi/schemaNewProduct';
import handleError from '../utils/handleError';

const validateCreateProduct = (request: Request, _response: Response, next: NextFunction) => {
  const { name, amount } = request.body;

  const { error } = schemaNewProduct.validate({ name, amount }); 

  if (error) {
    const { message } = error;
    const status: number = message.includes('length') || message.includes('string')
      ? 422 : 400;
    next(handleError(status, error.message));
  }

  next();
};

export default validateCreateProduct;