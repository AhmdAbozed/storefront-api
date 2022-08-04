import express from 'express'

import productsRoutes from '../controllers/products.js'
import usersRoutes from '../controllers/users.js';
import ordersRoutes from '../controllers/orders.js';
import orders_productsRoutes from '../controllers/orders_products.js';
const catalog = (app: express.Application)=>{
    productsRoutes(app);
    usersRoutes(app);
    ordersRoutes(app);
    orders_productsRoutes(app);
}

export default catalog;