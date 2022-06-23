import connection from '../models/connection';
import UserModel from '../models/userModel';
import IUser from '../interfaces/IUser';
import generateToken from '../utils/generateToken';

class UsersService {
  public models: UserModel;

  constructor() {
    this.models = new UserModel(connection);
  }

  public async findUser(username: string, password: string) {
    const response = await this.models.findUser(username, password);

    if (!response.length) return false;

    const token = generateToken({ idUser: response[0].id, username: response[0].username });

    return token;
  }

  public async create({ username, classe, level, password }: IUser) {
    const idUser = await this.models.create({ username, classe, level, password });

    console.log('passou', idUser);    

    const token = generateToken({ idUser, username });

    return token;
  }
}

export default UsersService;