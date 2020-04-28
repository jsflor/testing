import { createStore } from '../arrays';

describe('Arrays test', () => {

    test('should add fruit', () => {
       const store = createStore();
       store.addFruits('fresa');
       expect(store.getFruits()).toStrictEqual(['fresa']);
    });

    test('should add fruits', () => {
        const store = createStore();
        store.addFruits('fresa');
        store.addFruits('melon');
        expect(store.getFruits()).toStrictEqual(['fresa', 'melon']);
     });
     
     test('should have el', () => {
        const store = createStore();
        store.addFruits('manzana');
        store.addFruits('pera');
        expect(store.getFruits()).toContain('pera');
        expect(store.getFruits()).not.toContain('melon');
     });

     test('should have lenth', () => {
        const store = createStore();
        store.addFruits('manzana');
        store.addFruits('pera');
        expect(store.getFruits()).toHaveLength(2);
     });

     test('should add Object', () => {
        const store = createStore();
        store.addFruits({ name: 'fruta', price: 5 });
        expect(store.getFruits()).toContainEqual({ name: 'fruta', price: 5 });
     });

});