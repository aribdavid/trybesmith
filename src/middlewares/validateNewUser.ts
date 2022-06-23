import { NextFunction, Request, Response } from 'express';
import schemaNewUser from '../joi/schemaNewUser';
import handleError from '../utils/handleError';

const validateNewUser = (request: Request, _response: Response, next: NextFunction) => {
  const { username, classe, level, password } = request.body;

  const { error } = schemaNewUser.validate({ username, classe, level, password }); 

  if (error) {
    const { message } = error;
    const unprocessableCases = [
      message.includes('length'),
      message.includes('string'),
      message.includes('number'),
      message.includes('greater'),
    ];

    const status: number = unprocessableCases.some((value) => value) ? 422 : 400;
    next(handleError(status, error.message));
  }

  next();
};

export default validateNewUser;