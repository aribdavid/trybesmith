import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private services = new OrderService()) {}

  public getAll = async (_request: Request, response: Response) => {
    const orders = await this.services.getAll();

    return response.status(200).json(orders);
  };

  public create = async (req: Request, response: Response) => {
    const { productsIds, decoded } = req.body;
    const { idUser } = decoded.data;

    const order = await this.services.create(idUser, productsIds);

    return response.status(201).json(order);
  };
}

export default OrderController;