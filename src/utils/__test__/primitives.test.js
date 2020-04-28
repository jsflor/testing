const getValue = (exp) => {
    switch (exp) {
        case 'def':
            return {};
        case 'indef':
            return undefined; 
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return null;
    }
}

describe('Null, Undefined & Booleans Tests', () => {
    
    test('should have def value', () => {
        expect(getValue('def')).toBeDefined();
    });

    test('should have null value', () => {
        expect(getValue()).toBeNull();
    });

    test('should have true value', () => {
        expect(getValue('true')).toBeTruthy();
    });

    test('should have false value', () => {
        expect(getValue('false')).toBeFalsy();
    });

    test('should have NaN value', () => {
        expect(NaN).toBeNaN();
    });


});