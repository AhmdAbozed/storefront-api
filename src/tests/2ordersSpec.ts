import { order, ordersStore } from "../models/orders.js"
import { user,usersStore } from "../models/users.js";
import { app } from "../server.js";
import supertest from "supertest";

const request = supertest(app);
describe("endpoint response", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/orders");
    expect(response.status).toBe(401);
  });
});

const store = new ordersStore();

const userStore = new usersStore();

const user: user = {
    id: 2,
    firstName: "testingfirstname",
    lastName: "testinglastname",
    password: "testingpassword"
}

describe("orders Model", ()=>{

    it('create method for orders', async () => {
        const result = await store.create('1', 'active');
        expect(result.user_id).toEqual(1)
    });

    it('ordersByUser method should return orders made by a user', async () => {
        //To ensure a user exists for referencing, a user row is created prior to the read method
        const createUser = await userStore.create(user);
        const result = await store.ordersByUser('1');
        expect(result[0]).toBeDefined(); 
    })
})
