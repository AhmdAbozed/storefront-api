
import client from '../database.js'

export type product = {
    id: Number;
    name: string;
    price: Number;
}

export class productsStore {
    async index(): Promise<product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';
            const results = await conn.query(sql);
            conn.release();
            console.log("MOD INDEX: " + results.rows)
            //@ts-ignore
            return results.rows;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    async create(product: product): Promise<product> {
        try {
            console.log("gotten product at creation: " + JSON.stringify(product))
            const conn = await client.connect();
            const sql = 'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
            const results = await conn.query(sql, [product.name, product.price]);
            conn.release();
            console.log("MOD CREATE: " + results.rows[0])
            //@ts-ignore
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    async read(id: string): Promise<product> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE id=($1)';
            const results = await conn.query(sql, [id]);
            conn.release();
            console.log("MOD READ: " + results.rows[0])
            //@ts-ignore
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    //not in REQUIREMENTS
    async delete(id: string): Promise<product> {
        try {
            const conn = await client.connect();
            const sql = 'DELETE FROM products WHERE id=($1) RETURNING *';
            console.log("without number: " + id + " with number: " + Number(id))
            const results = await conn.query(sql, [Number(id)]);
            conn.release();
            //@ts-ignore
            return results;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }


}
