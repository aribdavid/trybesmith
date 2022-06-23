import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/IProduct';
import productQueries from '../queries/productQueries';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [response] = await this.connection.execute(productQueries.getAll);

    return response as IProduct[];
  }

  public async create(name: string, amount: string): Promise<number> {
    const [{ insertId }] = await this
      .connection.execute<ResultSetHeader>(productQueries.createProduct, [name, amount]);

    return insertId;
  }

  public async updateOrder(idOrder: number, idProduct: number) {
    await this.connection.execute(productQueries.updateOrder, [idOrder, idProduct]);
  }
}

export default ProductsModel;