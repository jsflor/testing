import { greetings, getId } from '../strings';

describe('strings tests', () => {

    const name = 'Sebas';
    const greet = greetings(name);
    const id = getId();

    test('func greetings', () => {
       expect(greet).toMatch('This is Sebas');
    });

    test('func greetings negative', () => {
        expect(greet).not.toMatch('This is Pepe');
     });
    
    test('func getId', () => {
        expect(id).toMatch(/\d{2}-\d{3}/);
    });
    

});