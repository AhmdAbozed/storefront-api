import client from '../database.js'

export type order = {
    id: Number;
    user_id: Number;
}

export class ordersStore {

    async create(user_id: string): Promise<order> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO orders (user_id) VALUES ($1) RETURNING *';
            const results = await conn.query(sql, [user_id]);
            conn.release();
            console.log("MOD ORDER CREATE: " + results.rows[0])
            //@ts-ignore
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }


    async ordersByUser(user_id: string): Promise<order[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders WHERE user_id=($1)';
            const results = await conn.query(sql,[user_id]);
            conn.release();
            console.log("MOD ORDERS: " + results.rows)
            //@ts-ignore
            return results.rows;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }
}