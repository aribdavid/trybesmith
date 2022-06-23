import { Pool, ResultSetHeader } from 'mysql2/promise';
import userQueries from '../queries/userQueries';
import IUser from '../interfaces/IUser';

interface IUserWithId extends IUser {
  id: number,
}

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findUser(username: string, password: string): Promise<IUserWithId[]> {
    const [response] = await this.connection
      .execute(userQueries.findUser, [username, password]);

    return response as IUserWithId[];
  }

  public async create({ username, classe, level, password }: IUser) {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(userQueries.createUser, [username, classe, level, password]);

    return insertId;
  }
}

export default UserModel;