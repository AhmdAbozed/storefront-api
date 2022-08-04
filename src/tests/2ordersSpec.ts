import { order, ordersStore } from "../models/orders.js"
import { user,usersStore } from "../models/users.js";


const store = new ordersStore();

const userStore = new usersStore();

const order: order = {
    id: 1,
    user_id: 1,    
}

const user: user = {
    id: 2,
    firstName: "testingfirstname",
    lastName: "testinglastname",
    password: "testingpassword"
}

describe("orders Model", ()=>{

    it('create method should create order', async () => {
        const result = await store.create('1'); 
        console.log("READ: "+result)
        expect(result.user_id).toEqual(1)
    });

    it('ordersByUser method should return orders', async () => {
        const createUser = await userStore.create(user);
        const result = await store.ordersByUser('1');
        console.log("orders test result: "+result);
        console.log("orders test result: "+result[0]);
        expect(result[0]).toBeDefined(); 
    })
})
