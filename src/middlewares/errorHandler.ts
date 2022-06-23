import { NextFunction, Request, Response } from 'express';
import IError from '../interfaces/IError';

const errorHandler = (
  error: IError,
  _request: Request, 
  response: Response,
  _next: NextFunction,
) => {
  if (error.status) return response.status(error.status).json({ message: error.message });

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;