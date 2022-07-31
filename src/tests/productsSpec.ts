import { product, productsStore } from "../models/products.js"

const store = new productsStore();

console.log('heelo?')
describe("Products Model", ()=>{
    it('Has index, create, delete, read', ()=>{
        //@ts-ignore
        expect(store.index && store.create && store.delete && store.read).toBeDefined();
    })

})