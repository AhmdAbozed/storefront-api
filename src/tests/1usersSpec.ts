import { user, usersStore } from "../models/users.js"
import supertest from "supertest";
import { app } from "../server.js";

const request = supertest(app);

const store = new usersStore();

const user: user = {
    id: 1,
    firstName: "testingfirstname",
    lastName: "testinglastname",
    password: "testingpassword"
}

describe("users Model", () => {
    it('Has index, create, delete, read', () => {
        //@ts-ignore
        expect(store.index && store.create && store.read).toBeDefined();
    })

    it('create method should add a user', async () => {
        const result = await store.create(user);
        //Pass is copied from result because I can't predict the hashing result
        const pass = result.password;
        expect(result).toEqual({
            id: 1,
            firstName: "testingfirstname",
            lastName: "testinglastname",
            password: pass
        });

    });

    it('index method should return users', async () => {
        const result = await store.index();
        const pass = result[0].password;
        expect(result[0]).toEqual({
            id: 1,
            firstName: "testingfirstname",
            lastName: "testinglastname",
            password: pass
        });

    });


    it('read method should read correct user', async () => {
        const result = await store.read('1');
        const pass = result.password;
        expect(result).toEqual({
            id: 1,
            firstName: "testingfirstname",
            lastName: "testinglastname",
            password: pass
        });
    });
    it("[GET]/users", async () => {
        const response = await request.get("/users");
        expect(response.status).toBe(200);
      });
  
      it("[GET]/users/1", async () => {
          const response = await request.get("/users/1");
          expect(response.status).toBe(200);
    });

    it("[POST]/users", async () => {
        const response = await request.post("/users");
        expect(response.status).toBe(200);
      });
 

})
