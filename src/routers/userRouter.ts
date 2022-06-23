import express from 'express';
import rescue from 'express-rescue';
import UserController from '../controllers/userController';
import validateCreateUser from '../middlewares/validateNewUser';

const route = express.Router();
const userController = new UserController();

route.post('/', rescue(validateCreateUser), userController.create);

export default route;