import { getDataCallback } from '../async';

describe('Async Test', () => {
    
    test('should callback return data', (done) => {
        
        getDataCallback((name) => {
            expect(name).toBe('Sebastian');
            done();
        });

    });

});