import productsRoutes from '../controllers/products.js';
import usersRoutes from '../controllers/users.js';
var catalog = function (app) {
    productsRoutes(app);
    usersRoutes(app);
};
export default catalog;
