import { productsStore } from "../models/products.js";
var store = new productsStore();
console.log('heelo?');
describe("Products Model", function () {
    it('Has index, create, delete, read', function () {
        //@ts-ignore
        expect(store.index && store.create && store.delete && store.read).toBeDefined();
    });
});
