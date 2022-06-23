import express from 'express';
import rescue from 'express-rescue';
import UserController from '../controllers/userController';
import validateLogin from '../middlewares/validateLogin';

const route = express.Router();
const userController = new UserController();

route.post('/', rescue(validateLogin), userController.findUser);

export default route;