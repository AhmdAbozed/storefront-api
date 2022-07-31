import productsRoutes from '../controllers/products.js';
var catalog = function (app) {
    productsRoutes(app);
};
export default catalog;
