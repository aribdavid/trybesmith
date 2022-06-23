import { Pool, ResultSetHeader } from 'mysql2/promise';
import UnformattedOrder from '../interfaces/unformattedOrder';
import orderQueries from '../queries/orderQueries';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const [response] = await this.connection.execute(orderQueries.getAll);

    return response as UnformattedOrder[];
  }

  public async create(userId: number): Promise<number> {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(orderQueries.create, [userId]);

    return insertId;
  }
}

export default OrderModel;