import connection from '../models/connection';
import ProductModel from '../models/productModel';

class ProductsService {
  public models: ProductModel;

  constructor() {
    this.models = new ProductModel(connection);
  }

  public async getAll() {
    const response = await this.models.getAll();

    return response;
  }

  public async create(name: string, amount: string) {
    const idProductCreated = await this.models.create(name, amount);

    return {
      id: idProductCreated,
      name,
      amount,
    };
  }
}

export default ProductsService;