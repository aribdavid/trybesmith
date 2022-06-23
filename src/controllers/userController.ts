import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private services = new UserService()) {}

  public findUser = async (request: Request, response: Response) => {
    const { username, password } = request.body;

    const user = await this.services.findUser(username, password);

    if (!user) return response.status(401).json({ message: 'Username or password invalid' });

    return response.status(200).json({ token: response });
  };

  public create = async (request: Request, response: Response) => {
    const { username, classe, level, password } = request.body;

    const token = await this.services.create({ username, classe, level, password });

    return response.status(201).json({ token });
  };
}

export default UserController;