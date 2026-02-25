
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { productsRouter } from './routes/products.js';
import { usersRouter } from './routes/users.js';
import { cartRouter } from './routes/cart.js';
import { ordersRouter } from './routes/orders.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Core middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routers
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);

// 404 handler
app.use(notFoundHandler);

// Centralized error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
