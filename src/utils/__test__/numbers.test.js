import { suma, resta, multiplicacion, division, getRandomNum } from '../numbers';

describe('numbers tests', () => {

    test('func suma', () => {
        expect(suma(5, 5)).toBe(10)
    });

    test('func resta', () => {
        expect(resta(5, 5)).toBe(0)
    });

    test('func multiplicacion', () => {
        expect(multiplicacion(5, 5,)).toBe(25)
    });

    test('func division', () => {
        expect(division(5, 5)).toBe(1)
    });
    
    test('func getRandomNum', () => {
        expect(getRandomNum(5, 10)).toBeGreaterThanOrEqual(5)
        expect(getRandomNum(5, 10)).toBeLessThanOrEqual(10)
    });

});