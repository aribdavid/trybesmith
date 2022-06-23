import jwt from 'jsonwebtoken';

type Payload = {
  idUser: number,
  username: string,
};

const generateToken = (payload: Payload) => {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const secret = 'baruchHashem';

  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

export default generateToken;