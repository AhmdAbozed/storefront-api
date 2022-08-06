import { product, productsStore } from "../models/products.js"
import supertest from "supertest";
import {app} from "../server.js"
const store = new productsStore();

const product: product = {
    id: 1,
    name: "testingproduct",
    price: 250
}

const request = supertest(app);

describe("endpoint response", () => {
  it("gets the api endpoint", async () => {
    const response = await request.get("/products");
    expect(response.status).toBe(200);
  });
});

describe("Products Model", ()=>{
    it('Has index, create, delete, read', ()=>{
        //@ts-ignore
        expect(store.index && store.create && store.read).toBeDefined();
    })

    it('create method should add a product', async () => {
        const result = await store.create(product);
        result.price = Number(result.price)
        expect(result).toEqual({
            id: 1,
            name: 'testingproduct',
            price: 250,
        });
    });

    it('index method should return products', async () => {
        const result = await store.index();
        
        result[0].price = Number(result[0].price)

        expect(result[0]).toEqual({
            id: 1,
            name: 'testingproduct',
            price: 250,
        });
    });


    it('read method should read correct product', async () => {
        const result = await store.read('1');
        result.price = Number(result.price)

        expect(result).toEqual({
            id: 1,
            name: 'testingproduct',
            price: 250,
        });
    });

})