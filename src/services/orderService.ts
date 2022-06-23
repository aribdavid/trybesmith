// import IOrder from '../interfaces/order';
import IUnformattedOrder from '../interfaces/IUnformattedOder';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';

class OrdersService {
  public models: OrderModel;

  constructor() {
    this.models = new OrderModel(connection);
  }

  private transformProductArray = (order: IUnformattedOrder): IOrder => ({
    ...order,
    productsIds: [order.productsIds],
  });

  private reduceOrder = (newOrders: IOrder[], oldOrder: IUnformattedOrder, index: number) => {
    if (index === 0) return newOrders;

    const formattedOrder = this.transformProductArray(oldOrder);
    const isOrderExists = newOrders.some((order) => order.id === oldOrder.id);

    if (isOrderExists) {
      const indexOrder = newOrders.findIndex((order: IOrder) => order.id === oldOrder.id);
      const idProduct = formattedOrder.productsIds[0];
      newOrders[indexOrder].productsIds.push(idProduct);
      return newOrders;
    }

    return [...newOrders, formattedOrder];
  };

  public async getAll() {
    const orders = await this.models.getAll();

    const initialValue = this.transformProductArray(orders[0]);
    const uniqueOrders = orders.reduce(this.reduceOrder, [initialValue]);

    return uniqueOrders;
  }

  public async create(userId: number, productsIds: number[]) {
    const orderId = await this.models.create(userId);

    const productModel = new ProductModel(connection);

    const promisesProduct = productsIds
      .map((productId) => productModel.updateOrder(orderId, productId));

    await Promise.all(promisesProduct);

    return {
      userId,
      productsIds,
    };
  }
}

export default OrdersService;