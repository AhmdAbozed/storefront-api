import client from '../database.js'

export type order_product = {
    id: Number;
    user_id: Number;
    order_id: Number;
    product_id: Number;
}

export class orders_productsStore {

    async create(user_id: string, order_id: string, product_id: string, quantity: string): Promise<order_product> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO orders_products (user_id, order_id, product_id, quantity) VALUES ($1, $2, $3, $4) RETURNING *';
            const results = await conn.query(sql, [user_id, order_id, product_id, quantity]);
            conn.release();
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
            //@ts-ignore
            return results.rows;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    
}