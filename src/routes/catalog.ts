import express from 'express'

import productsRoutes from '../controllers/products.js'

const catalog = (app: express.Application)=>{
    productsRoutes(app);
}

export default catalog;