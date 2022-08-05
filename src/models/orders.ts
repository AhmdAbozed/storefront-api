import client from '../database.js'
import { verifyAuthToken } from '../controllers/users.js';
export type order = {
    id: Number;
    user_id: Number;
    status: string;
}

export class ordersStore {

    async create(user_id: string, status: string): Promise<order> {
        try {
            const conn = await client.connect();
            const sql = 'INSERT INTO orders (user_id, status) VALUES ($1, $2) RETURNING *';
            const results = await conn.query(sql, [user_id, status]);
            conn.release();
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
            //@ts-ignore
            return results.rows;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }
}