import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import handleError from '../utils/handleError';

interface ReqUser extends Request {
  user: Decoded
}

interface Decoded extends JwtPayload {
  data: {
    idUser: number,
    username: string
  }
}

const validateOrder = (request: ReqUser, _response: Response, next: NextFunction) => {
  try {
    const { authorization } = request.headers;

    if (!authorization) return next(handleError(401, 'Token not found'));

    const decoded = jwt.verify(authorization, 'tantoFaz');

    request.body = { ...request.body, decoded };

    next();
  } catch (error) {
    return next(handleError(401, 'Invalid token'));
  }
};

export default validateOrder;