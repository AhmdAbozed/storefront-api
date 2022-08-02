import express from 'express'

import productsRoutes from '../controllers/products.js'
import usersRoutes from '../controllers/users.js';

const catalog = (app: express.Application)=>{
    productsRoutes(app);
    usersRoutes(app);
}

export default catalog;