
import client from '../database.js'

export type product = {
    id: Number;
    name: string;
    price: Number;
}

export class productsStore{
    async index(): Promise<product[]>{
        try{
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';
            const results = await conn.query(sql);
            conn.release();
            //@ts-ignore
            return results;
        }
        catch(err){
            throw new Error(`${err}`)
        }
    }

    async create(product: product):Promise<product>{
       try {
        const conn = await client.connect();
        const sql = 'INSERT INTO products (name, price) VALUES ($1, $2)';
        const results = await conn.query(sql, [product.name, product.price]);
        conn.release();
        //@ts-ignore
        return results;
    }
        catch(err){
            throw new Error(`${err}`)
        }
    }

    async delete(id: string):Promise<product>{
        try {
         const conn = await client.connect();
         const sql = 'DELETE FROM products WHERE id=($1)';
         const results = await conn.query(sql,[id]);
         conn.release();
         //@ts-ignore
         return results;
     }
         catch(err){
             throw new Error(`${err}`)
         }
    }

    async read(id: string):Promise<product>{
        try {
         const conn = await client.connect();
         const sql = 'SELECT FROM products WHERE id=($1)';
         const results = await conn.query(sql,[id]);
         conn.release();
         //@ts-ignore
         return results;
     }
         catch(err){
             throw new Error(`${err}`)
         }
    }
}

