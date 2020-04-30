import { getDataCallback, getDataPromise, getDataPromiseError, getUsers } from '../async';

describe('Async Test', () => {
    
    test('should callback return data', (done) => {
        
        getDataCallback((name) => {
            expect(name).toBe('Sebastian');
            done();
        });

    });

    test('should promise return data', (done) => {
        
        getDataPromise()
        .then((name) => {
            expect(name).toBe('Sebastian');
            done();
        });

    });

    test('should promise return data with expect', () => {
        
        return expect(getDataPromise()).resolves.toBe('Sebastian');

    });

    test('should promise return error', (done) => {
        
        getDataPromiseError()
        .then()
        .catch(err => {
            expect(err).toBe('Error!');
            done();
        });

    });

    test('should promise return error with expect', () => {
        
        return expect(getDataPromiseError()).rejects.toBe('Error!');

    });

    test('should promise return data with async await', async () => {
        
        const name = await getDataPromise();
        expect(name).toBe('Sebastian');

    });

    test('should promise return error with async await', async () => {
        
        try {
            const name = await getDataPromiseError();
            expect(name).toBe('Sebastian');
        } catch (error) {
            expect(error).toBe('Error!');
        }

    });

    test('should fetch return user', async () => {
        
        const user = await getUsers();
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');

    });

});