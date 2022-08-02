import { user, usersStore } from "../models/users.js"

const store = new usersStore();

const user: user = {
    id: 1,
    firstName: "testingfirstname",
    lastName: "testinglastname",
    password: "testingpassword"
}

describe("users Model", ()=>{
    it('Has index, create, delete, read', ()=>{
        //@ts-ignore
        expect(store.index && store.create && store.read).toBeDefined();
    })

    it('create method should add a user', async () => {
        const result = await store.create(user);

        expect(result).toEqual({
            id: 1,
            firstName: "testingfirstname",
            lastName: "testinglastname",
            password: "testingpassword"
        });

    });

    it('index method should return users', async () => {
        const result = await store.index();

        expect(result[0]).toEqual({
            id: 1,
            firstName: "testingfirstname",
            lastName: "testinglastname",
            password: "testingpassword"
        });

    });


    it('read method should read correct user', async () => {
        const result = await store.read('1'); 
        console.log("USER TEST READ: "+result)

        expect(result).toEqual({
            id: 1,
            firstName: "testingfirstname",
            lastName: "testinglastname",
            password: "testingpassword"
        });
    });

})