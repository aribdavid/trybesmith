import { NextFunction, Request, Response } from 'express';
import handleError from '../utils/handleError';

const validateLogin = (request: Request, _response: Response, next: NextFunction) => {
  const { username, password } = request.body;

  if (!username) return next(handleError(400, '"username" is required'));
  if (!password) return next(handleError(400, '"password" is required'));

  next();
};

export default validateLogin;