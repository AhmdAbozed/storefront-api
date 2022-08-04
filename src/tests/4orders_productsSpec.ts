import { order_product, orders_productsStore } from "../models/orders_products.js"

const store = new orders_productsStore();

const order_product: order_product = {
    id: 1,
    user_id: 1,
    order_id: 1,
    product_id: 1,    
}

describe("orders Model", ()=>{

    it('create method should create order_product row', async () => {
        const result = await store.create('1','1','1'); 
        console.log("CREATE ORDER PRODUCT: "+result)
        expect(result.user_id).toEqual(1)
    });

    it('productsByOrder method should return products in an order', async () => {
        const result = await store.productsByOrder('1');
        console.log("orders_products test result: "+result);
        console.log("orders_products test result: "+result[0]);
        expect(result[0]).toBeDefined(); 
    })
})