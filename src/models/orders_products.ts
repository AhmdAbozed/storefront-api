import client from '../database.js'

export type order_product = {
    id: Number;
    user_id: Number;
    order_id: Number;
    product_id: Number;
}

export class orders_productsStore {

    async create(user_id: string, order_id: string, product_id: string): Promise<order_product> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO orders_products (user_id, order_id, product_id) VALUES ($1, $2, $3) RETURNING *';
            const results = await conn.query(sql, [user_id, order_id, product_id]);
            conn.release();
            console.log("MOD ORDERS_PRODUCTS CREATE: " + results.rows[0])
            //@ts-ignore
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }


    async productsByOrder(order_id: string): Promise<order_product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders_products WHERE order_id=($1)';
            const results = await conn.query(sql,[order_id]);
            conn.release();
            console.log("MOD productsByOrder: " + results.rows)
            //@ts-ignore
            return results.rows;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }
}