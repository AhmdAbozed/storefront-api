import client from '../database.js'

export type user = {
    id: Number;
    firstName: string;
    lastName: string;
    password: string;
}

export class usersStore {
    async index(): Promise<user[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM users';
            const results = await conn.query(sql);
            conn.release();
            console.log("MOD USER INDEX: " + results.rows)
            //@ts-ignore
            return results.rows;
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    async create(user: user): Promise<user> {
        try {
            console.log("gotten user at creation: " + JSON.stringify(user))
            const conn = await client.connect();
            const sql = 'INSERT INTO users ("firstName", "lastName", "password") VALUES ($1, $2, $3) RETURNING *';
            const results = await conn.query(sql, [user.firstName, user.lastName, user.password]);
            conn.release();
            console.log("MOD USER CREATE: " + results.rows[0])
            //@ts-ignore
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    async read(id: string): Promise<user> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM users WHERE id=($1)';
            const results = await conn.query(sql, [id]);
            conn.release();
            console.log("MOD USERS READ: " + results.rows[0])
            //@ts-ignore
            return results.rows[0];
        }
        catch (err) {
            throw new Error(`${err}`)
        }
    }

    //not in REQUIREMENTS
    async delete(id: string): Promise<user> {
        try {
            const conn = await client.connect();
            const sql = 'DELETE FROM users WHERE id=($1) RETURNING *';
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
