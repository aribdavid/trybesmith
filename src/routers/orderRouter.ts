import express from 'express';
import rescue from 'express-rescue';
import OrderController from '../controllers/orderController';
import validateOrder from '../middlewares/validateOrder';
import authenticator from '../middlewares/authenticator';

const route = express.Router();
const orderController = new OrderController();

route.get('/', orderController.getAll);
route.post('/', rescue(authenticator), rescue(validateOrder), orderController.create);

export default route;