import express from 'express';
import productsRoutes from './productRouter';
import usersRoutes from './userRouter';
import ordersRoutes from './orderRouter';
import loginRoutes from './loginRouter';

const route = express.Router();

route.use('/products', productsRoutes);
route.use('/users', usersRoutes);
route.use('/orders', ordersRoutes);
route.use('/login', loginRoutes);

export default route;