import { Request, Response } from 'express';
import IProduct from '../interfaces/IProduct';
import ProductService from '../services/productService';

class ProductsController {
  constructor(private services = new ProductService()) {}

  public getAll = async (request: Request, response: Response) => {
    const products = await this.services.getAll();

    return response.status(200).json(products);
  };

  public create = async (request: Request, response: Response): Promise<Response<IProduct>> => {
    const { name, amount } = request.body;

    const product = await this.services.create(name, amount);

    return response.status(201).json(product);
  };
}

export default ProductsController;