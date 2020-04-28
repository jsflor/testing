import { createStore } from '../objects';

describe('Objects Tests', () => {

    test('should add item', () => {
        const store = createStore();
        store.addItem({ id: 0, name: 'Sebas' });

        expect(store.getStore()[0]).toEqual({ id: 0, name: 'Sebas' });
    });
    
    test('should search item by id', () => {
        const store = createStore();
        store.addItem({ id: 0, name: 'Sebas' });

        expect(store.getById(0)).toEqual({ id: 0, name: 'Sebas' });
        expect(store.getById(0)).toMatchObject({ name: 'Sebas' });
        expect(store.getById(0)).toHaveProperty('name');
        expect(store.getById(0)).toHaveProperty('name', 'Sebas');
    });

});