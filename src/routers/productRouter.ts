import express from 'express';
import rescue from 'express-rescue';
import ProductController from '../controllers/productController';
import validateNewProduct from '../middlewares/validateNewProduct';

const route = express.Router();
const productController = new ProductController();

route.get('/', productController.getAll);
route.post('/', rescue(validateNewProduct), productController.create);

export default route;