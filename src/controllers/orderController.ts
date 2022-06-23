import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class ProductController {
  constructor(private services = new OrderService()) {}

  public getAll = async (_request: Request, response: Response) => {
    const orders = await this.services.getAll();

    return response.status(200).json(orders);
  };

  public create = async (request: Request, response: Response) => {
    const { productsIds, decoded } = request.body;
    const { idUser } = decoded.data;

    const order = await this.services.create(idUser, productsIds);

    return response.status(201).json(order);
  };
}

export default ProductController;