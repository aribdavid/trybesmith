import express from 'express';
import routes from './routers';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

export default app;
